import { useTheme } from "lib/hooks/useTheme";
import { ComposedSong } from "lib/Utils/ComposedSong";
import { Song } from "lib/Utils/Song";
import { useEffect, useState } from "react"
import { SerializedSongType } from "types/SongTypes";


type songType = 'recorded' | 'composed'
interface SongMenuProps {
    songs: SerializedSongType[] | Song[] | ComposedSong[],
    SongComponent: any,
    componentProps: any,
    className?: string,
    style?: any,
    baseType: songType
}
export function SongMenu({ songs, SongComponent, componentProps, className = '', style = {}, baseType = 'recorded' }: SongMenuProps) {
    const [songType, setSongType] = useState<songType>('recorded')
    const [theme] = useTheme()
    useEffect(() => {
        setSongType(baseType)
    },[baseType])
    const selectedColor = theme.layer('menu_background',0.32).desaturate(0.4)
    const unselectedColor = theme.layer('menu_background',0.35).lighten(0.2)
    return <div className={`${className}`} style={style}>
        <div className="tab-selector-wrapper">
            <button
                className={'tab-selector'}
                style={{
                    backgroundColor: songType === 'recorded' ? selectedColor.toString() : unselectedColor.toString()
                }}
                onClick={() => setSongType("recorded")}
            >
                Recorded
            </button>
            <button
                className={'tab-selector'}
                style={{
                    backgroundColor: songType !== 'recorded' ? selectedColor.toString() : unselectedColor.toString()
                }}
                onClick={() => setSongType("composed")}
            >
                Composed
            </button>
        </div>
        <div className="songs-wrapper" style={{backgroundColor: selectedColor.toString()}}>
            {songs.filter((song) => 
                songType === 'composed' ? song.data?.isComposedVersion : !song.data?.isComposedVersion
            ).map((song) =>
                <SongComponent
                    {...componentProps}
                    data={song}
                    key={song?.name}
                />
            )}

        </div>
    </div>
}