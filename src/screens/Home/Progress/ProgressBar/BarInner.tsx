import * as React from "react"
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg"

interface BarInnerProps {
  w?: number;
  h?: number;
}

const BarInner: React.FC<BarInnerProps> = ({ w, h = 38 }) => (
  <Svg
    width={w}
    height={h}
    viewBox={`0 0 ${w} ${h}`}
    fill="none"
    style={{ position: 'absolute', left: -11 }}
  >
    <Rect
      x={244.998}
      y={12.9541}
      width={12}
      height={233}
      rx={5}
      transform="rotate(89.978 244.998 12.954)"
      fill="url(#paint0_linear_1321_10817)"
    />
    <Rect
      x={244.498}
      y={13.4543}
      width={11}
      height={232}
      rx={4.5}
      transform="rotate(89.978 244.498 13.454)"
      stroke="url(#paint1_linear_1321_10817)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1321_10817"
        x1={251.591}
        y1={-82.2042}
        x2={230.008}
        y2={-81.1259}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5E43F5" />
        <Stop offset={1} stopColor="#7E39B4" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1321_10817"
        x1={240.533}
        y1={122.431}
        x2={262.092}
        y2={123.581}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5E43F6" />
        <Stop offset={1} stopColor="#7E39B4" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default BarInner;
