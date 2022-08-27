import { SvgNoteImageProps } from "..";

export default function mibNote({ style, background }: SvgNoteImageProps) {
    return <svg
        style={style}
        className={'svg-note'}
        viewBox="0 0 311.9 311.9"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            className="svg-b"
            d="M10.6585 31.4143C14.0665 31.4143 16.8292 34.177 16.8292 37.585V113.54C16.8292 114.368 17.8162 114.816 18.4912 114.337C62.4503 83.1278 100.485 146.958 6.00837 199.981C5.34458 200.354 4.48779 199.895 4.48779 199.134V37.585C4.48779 34.177 7.2505 31.4143 10.6585 31.4143V31.4143ZM17.3901 131.108C17.3901 130.85 17.4993 130.592 17.6794 130.407C43.1371 104.333 68.853 142.392 18.9059 171.355C18.2453 171.738 17.3901 171.277 17.3901 170.513V131.108Z"
            style={{
                strokeWidth: 24,
                paintOrder: 'stroke',
                stroke: background,
            }}
        />
        <path
            style={{
                strokeWidth: 6
            }}
            d="m 226.7,202.2 h -37.6 c 15.25395,-8.75987 25.42508,-24.2598 27.39,-41.74 l 10.35017,-0.0729 c 1.89602,0.0167 6.63216,-1.21235 6.60552,-4.44518 -0.0439,-3.69964 -3.04589,-5.54969 -6.74569,-5.5219 H 216.49 C 212.29646,120.46833 186.13373,98.537936 155.91,99.64 125.69003,98.543179 99.533183,120.47226 95.34,150.42 l -10.674762,0.12153 c -3.599144,0.0805 -6.247808,2.71775 -6.275238,4.61532 0.03846,3.70592 3.074088,5.34201 6.78,5.30315 h 10.18 c 1.965558,17.4827 12.14108,32.98366 27.4,41.74 l -38.187681,0.19445 c -4.333822,0.11041 -6.228962,2.53779 -6.250932,4.44087 0.03846,3.70039 3.118224,5.45354 6.818613,5.41468 h 142.24491 c 3.87036,-0.12918 6.05881,-2.89397 6.08078,-4.79547 -0.0439,-3.70357 -3.052,-5.28786 -6.75569,-5.25453 z M 113.37,120.28 c 13.67,-16.56 43.81,-14.23 67.34,5.19 8.32039,6.75538 15.03271,15.27815 19.65,24.95 H 108 c -3.13335,-10.32731 -1.13732,-21.53036 5.37,-30.14 z m 38.86,40.19 h 51.67 c 3.108,10.32332 1.10174,21.51011 -5.4,30.11 -13.67,16.56 -43.82,14.22 -67.33,-5.2 -8.32907,-6.74932 -15.04585,-15.27341 -19.66,-24.95 z"
        />
    </svg>
}