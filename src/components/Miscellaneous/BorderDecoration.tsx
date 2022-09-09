
interface RawBorderDecorationProps {
    decorationColor?: string;
}

export function RawBorderDecoration({ decorationColor }: RawBorderDecorationProps) {
    const defaultStyle: React.CSSProperties = {
        position: "absolute",
        width: '1.2rem',
        height: '1.2rem',
        color: decorationColor ?? "var(--accent)",
    }
    return <>
        <StarBorderSvg
            style={{
                ...defaultStyle,
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%) rotate(90deg)',
            }}
        />
        <StarBorderSvg
            style={{
                ...defaultStyle,
                top: 0,
                left: 0,
                transform: 'translate(-50%, -50%)',
            }}
        />
        <StarBorderSvg
            style={{
                ...defaultStyle,
                bottom: 0,
                right: 0,
                transform: 'translate(50%, 50%) rotate(180deg)',
            }}
        />
        <StarBorderSvg
            style={{
                ...defaultStyle,
                bottom: 0,
                left: 0,
                transform: 'translate(-50%, 50%) rotate(270deg)',
            }}
        />
    </>
}

interface DecorationBorderedBoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    decorationColor?: string;
}
export function DecorationBorderedBox(props: DecorationBorderedBoxProps) {
    return <div {...props}>
        <RawBorderDecoration decorationColor={props.decorationColor} />
        {props.children}
    </div>
}

interface StarBorderSvgProps {
    style?: React.CSSProperties
}
function StarBorderSvg({ style }: StarBorderSvgProps) {
    return <svg style={style} width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.6227 62.5569C22.7783 62.9244 21.9014 62.0548 22.2549 61.2045C28.9472 45.107 28.5696 35.9799 21.2127 21.2131C36.7738 28.3289 45.9318 28.5721 61.042 22.324C61.9123 21.9641 62.7952 22.891 62.3956 23.7438C61.0524 26.6106 60.0298 29.2988 59.3267 31.9404C58.8538 33.717 57.5792 35.1963 55.8585 35.8436C45.633 39.6907 41.0049 44.5738 37.2901 55.504C36.6812 57.2956 35.1693 58.6342 33.3359 59.1026C30.2902 59.8807 27.1108 61.0383 23.6227 62.5569Z"
            fill="currentColor" />
    </svg>

}