import React, { Component } from 'react'
import { Stage, Container, Graphics, Sprite } from '@inlet/react-pixi';
import { ComposerCache } from "./ComposerCache"
import { faStepBackward, faStepForward, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Composer.css"
import isMobile from "is-mobile"
let NumOfColumnsPerCanvas = 35

class ComposerCanvas extends Component {
    constructor(props) {
        super(props)
        NumOfColumnsPerCanvas = Number(this.props.data.settings.columnsPerCanvas.value)
        let width = nearestEven(window.screen.width * 0.82)
        let height = nearestEven(window.screen.height * 0.45)

        if (window.screen.width < window.screen.height) {
            width = nearestEven(window.screen.height * 0.82)
            height = nearestEven(window.screen.width * 0.45)
        }
        this.state = {
            width: width,
            height: height,
            column: {
                width: calcMinColumnWidth(nearestEven(width)),
                height: height
            },
            timelineHeight: isMobile() ? 25 : 30,
            currentBreakpoint: -1
        }
        this.canvasRef = React.createRef()
        let margin = isMobile() ? 1 : 4
        this.cache = new ComposerCache(this.state.column.width, height, margin, this.state.timelineHeight).cache
        this.stageSelected = false
        this.sliderSelected = false
        this.stagePreviousPositon = 0
        this.throttleStage = 0
    }
    resetPointerDown = (e) => {
        this.stageSelected = false
        this.sliderSelected = false
        this.stagePreviousPositon = 0
    }
    componentDidMount() {
        window.addEventListener("pointerup", this.resetPointerDown)
        this.canvasRef.current._canvas.addEventListener("wheel", this.handleWheel)
    }
    componentWillUnmount() {
        window.removeEventListener("pointerup", this.resetPointerDown)
        this.canvasRef.current._canvas.removeEventListener("wheel", this.handleWheel)
    }
    handleWheel = (e) => {
        if (e.deltaY < 0) {
            this.props.functions.selectColumn(this.props.data.selected - 1, true)
        } else {
            this.props.functions.selectColumn(this.props.data.selected + 1, true)
        }
    }
    handleClick = (e, type) => {
        let x = e.data.global.x
        if (type === "click") {
            let totalWidth = this.state.column.width * this.props.data.columns.length

            let relativePos = Math.floor(x / this.state.width * totalWidth / this.state.column.width)
            this.props.functions.selectColumn(relativePos)
        }
        if (type === "up") {
            this.sliderSelected = false
        }
        if (type === "down") {
            this.sliderSelected = true
        }
        if (type === "downStage") {
            this.stagePreviousPositon = x
            this.stageSelected = true
        }
    }
    handleStageSlide = (e) => {
        let x = e.data.global.x
        if (this.stageSelected === true) {
            this.throttleStage++
            if (this.throttleStage < 4) return
            this.throttleStage = 0
            let isMovingLeft = this.stagePreviousPositon < x
            let amount = Math.floor(Math.abs(this.stagePreviousPositon - x) / 4)
            if (amount > 4) amount = 4
            let toAdd = isMovingLeft ? -1 : 1
            this.stagePreviousPositon = x
            if (this.props.data.selected === this.props.data.selected + toAdd * amount) return
            this.props.functions.selectColumn(this.props.data.selected + toAdd * amount, true)
        }
    }
    handleBreakpoints = (direction) => {
        let selectedColumn = this.props.data.selected
        let columns = this.props.data.columns
        let breakpoint
        let breakpoints = this.props.data.breakpoints
        if (direction === 1) {//right
            breakpoint = breakpoints.filter((v) => v > selectedColumn).sort((a, b) => a - b)
        } else {
            breakpoint = breakpoints.filter((v) => v < selectedColumn).sort((a, b) => b - a)
        }
        if (breakpoint.length >= 0) {
            if (columns.length >= breakpoint[0] && breakpoint[0] >= 0) {
                this.props.functions.selectColumn(breakpoint[0])
            }
        }

    }
    handleSlide = (e) => {
        if (this.sliderSelected) {
            this.throttleStage++
            if (this.throttleStage < 4) return
            this.throttleStage = 0
            let totalWidth = this.state.column.width * this.props.data.columns.length
            let x = e.data.global.x
            let relativePos = Math.floor(x / this.state.width * totalWidth / this.state.column.width)
            this.props.functions.selectColumn(relativePos, true)
        }
    }

    render() {
        let s = this.state
        let pixiOptions = {
            backgroundColor: 0x495466,
        }
        const { data, functions } = this.props
        let sizes = this.state.column
        let xPos = (data.selected - NumOfColumnsPerCanvas / 2 + 1) * - sizes.width
        let timelineHeight = this.state.timelineHeight
        let counter = 0
        let switcher = false
        let cache = this.cache
        let beatMarks = Number(data.settings.beatMarks.value)
        let counterLimit = beatMarks === 0 ? 14 : beatMarks * 5 - 1

        let relativeColumnWidth = this.state.width / data.columns.length
        let stageSize = Math.floor(relativeColumnWidth * (NumOfColumnsPerCanvas + 1))
        if (stageSize > this.state.width) stageSize = this.state.width
        let stagePos = relativeColumnWidth * data.selected - (NumOfColumnsPerCanvas / 2 - 1) * relativeColumnWidth

        return <div className="canvas-wrapper" style={{ width: s.width + 6 }}>
            <Stage
                width={s.width}
                height={s.height}
                options={pixiOptions}
                key={this.state.width}
                ref={this.canvasRef}
            >
                <Container
                    anchor={[0.5, 0.5]}
                    x={xPos}
                    interactive={true}
                    pointerdown={(e) => this.handleClick(e, "downStage")}
                    pointermove={(e) => this.handleStageSlide(e)}
                >
                    {data.columns.map((column, i) => {
                        if (counter > counterLimit) {
                            switcher = !switcher
                            counter = 0
                        }
                        counter++
                        if (!isVisible(i, data.selected)) return null
                        let tempoChangersCache = (i + 1) % beatMarks === 0 ? cache.columnsLarger : cache.columns
                        let standardCache = (i + 1) % beatMarks === 0 ? cache.standardLarger : cache.standard
                        let standardBg = standardCache[Number(switcher)] // boolean is 1 or 0
                        let background = column.tempoChanger === 0 ? standardBg : tempoChangersCache[column.tempoChanger]
                        background = data.selected === i ? standardCache[2] : background
                        return <Column
                            cache={cache}
                            key={i}
                            data={column}
                            index={i}
                            sizes={sizes}
                            backgroundCache={background}
                            click={functions.selectColumn}
                            isSelected={i === data.selected}
                            isBreakpoint={this.props.data.breakpoints.includes(i)}
                        />

                    })}
                </Container>
            </Stage>
            <div className="timeline-wrapper" style={{ height: this.state.timelineHeight }}>
                <div className="timeline-button" onClick={() => this.handleBreakpoints(-1)}>
                    <FontAwesomeIcon icon={faStepBackward} />
                </div>
                <div className="timeline-button" onClick={() => this.handleBreakpoints(1)}>
                    <FontAwesomeIcon icon={faStepForward} />
                </div>


                <Stage
                    width={s.width}
                    height={timelineHeight}
                    options={{ antialias: true, autoDensity: true }}
                >
                    <Container
                        width={this.state.width}
                        height={this.state.timelineHeight}
                        interactive={true}
                        pointertap={(e) => this.handleClick(e, "click")}
                        pointerdown={(e) => this.handleClick(e, "down")}
                        pointerup={(e) => this.handleClick(e, "up")}
                        pointermove={this.handleSlide}
                    >
                        <Graphics draw={(e) => { fillX(e, this.state.width, this.state.timelineHeight) }} />
                        {data.breakpoints.map(breakpoint => {
                            return <Sprite
                                image={cache.breakpoints[0]}
                                x={relativeColumnWidth * breakpoint}

                            >

                            </Sprite>
                        })}
                    </Container>

                    <Graphics draw={(e) => drawStage(e, stageSize, this.state.timelineHeight)} x={stagePos} y={2} />


                </Stage>
                <div className="timeline-button" onClick={functions.toggleBreakpoint}>
                    <FontAwesomeIcon icon={data.breakpoints.includes(data.selected) ? faMinusCircle : faPlusCircle} />
                </div>
            </div>
        </div>
    }
}

function fillX(g, width, height) {
    g.clear()
    g.beginFill(0x515c6f, 1)
    g.drawRect(0, 0, width, height)
}
function drawStage(g, width, height) {
    g.clear()
    g.lineStyle(3, 0x1a968b, 0.8)
    g.drawRoundedRect(0, 0, width - 2, height - 4, 6)
}

function Column(props) {
    let { data, index, sizes, click, cache, backgroundCache, isBreakpoint } = props
    return <Container
        pointertap={() => click(index)}
        interactive={true}
        x={sizes.width * index}

    >
        <Sprite
            image={backgroundCache}
            interactiveChildren={false}
        >
        </Sprite>
        {data.notes.map((note) => {
            return <Sprite
                key={note.index}
                image={cache.notes[note.layer]}
                y={positions[note.index] * sizes.height / 21}
            >

            </Sprite>
        })}
        {isBreakpoint ? <Sprite
            image={cache.breakpoints[1]}
        >

        </Sprite> : null}
    </Container>
}
function calcMinColumnWidth(parentWidth) {
    return nearestEven(parentWidth / NumOfColumnsPerCanvas)
}
function nearestEven(num) {
    return 2 * Math.round(num / 2);
}
function isVisible(pos, currentPos) {
    let threshold = NumOfColumnsPerCanvas / 2 + 2
    let boundaries = [currentPos - threshold, currentPos + threshold]
    return boundaries[0] < pos && pos < boundaries[1]
}
const positions = [14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6].reverse()
export default ComposerCanvas