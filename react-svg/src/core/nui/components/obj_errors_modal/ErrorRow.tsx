import { Gray } from "../../lib/palette";
import { ERROR_COLOR } from "./modal_data";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
};

export default function ErrorRow({ x, y, text, width, height }: Props) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={ERROR_COLOR} />
      <text x={x + 4} y={y + 16 + (height - 16) / 2} fontSize={16} fill={Gray.p600}>
        {text}
      </text>
    </g>
  );
}
