import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            fill="gray"
            d="M18.202 13.986h-1.33v5.521h1.33v-5.522ZM15.462 13.986h-1.33v5.521h1.33v-5.522Z"
        />
        <Path
            fill="gray"
            d="M22.478 11.167a.644.644 0 0 0-.46-.605.618.618 0 0 0-.184-.045h-3.547a2.144 2.144 0 0 0-4.1 0h-3.548a.638.638 0 0 0-.172.027h-.015a.641.641 0 0 0 .09 1.246l.711 9.743A1.512 1.512 0 0 0 12.683 23h7.104a1.512 1.512 0 0 0 1.433-1.467l.708-9.734a.638.638 0 0 0 .55-.632Zm-6.242-.952a.938.938 0 0 1 .69.302h-1.379a.932.932 0 0 1 .69-.302Zm3.55 11.575h-7.103c-.081 0-.208-.133-.223-.344l-.702-9.635h8.957l-.701 9.635c-.016.211-.143.344-.227.344Z"
        />
    </Svg>
)
export default SvgComponent
