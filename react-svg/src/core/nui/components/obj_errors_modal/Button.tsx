import { useState } from "react";
import { Gray } from "../../lib/palette";
import { ERROR_COLOR } from "./modal_data";

type Props = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  text: string;
  onClick: () => void;
};

export default function Button({ x, y, text, width = 64, height = 24, onClick }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const cursor = hover ? "pointer" : "arrow";

  return (
    <g
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      cursor={cursor}
      onClick={(e) => e.button === 0 && onClick()}>
      <rect x={x} y={y} width={width} height={height} fill={ERROR_COLOR} />
      <text x={x + 4} y={y + 16 + (height - 16) / 2} fontSize={16} fill={Gray.p600}>
        {text}
      </text>
    </g>
  );
}
