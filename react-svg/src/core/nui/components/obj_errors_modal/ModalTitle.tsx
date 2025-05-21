import { Gray } from "../../lib/palette";
import { TITLE_COLOR } from "./modal_data";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
};

export default function ModalTitle({ x, y, title, width, height }: Props) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={TITLE_COLOR} />
      <text x={x + 4} y={y + 16 + (height - 16) / 2} fontSize={16} fill={Gray.p600}>
        {title}
      </text>
    </g>
  );
}
