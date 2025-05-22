import { useState } from "react";
import { Blue } from "../../lib/palette";

type Props = {
  x: number;
  y: number;
  onClick: () => void;
  text: string;
  description: string;
};

export default function TextLink({ x, y, onClick, text, description }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const cursor = hover ? "pointer" : "arrow";
  return (
    <g onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} cursor={cursor}>
      <text x={x} y={y} fontSize={14} fill={Blue.p600} onClick={() => onClick()}>
        {text}
      </text>
      <title>{description}</title>
    </g>
  );
}
