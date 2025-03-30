import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    Pattern,
    Use,
    Image,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={57}
        height={56}
        fill="none"
        {...props}
    >
        <Path fill="url(#a)" d="M.5 0h56v56H.5z" />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="scale(.01)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="b"
                width={100}
                height={100}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default SvgComponent
