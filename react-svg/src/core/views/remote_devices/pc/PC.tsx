import { Gray } from "../../../nui/lib/palette";

type Props = {
  x: number;
  y: number;
  body_color?: string;
};

const padding = 3;

const max_width = 48;
const body_height = 28;
const table_height = 10;

export default function PC({ x, y, body_color = Gray.p600 }: Props) {
  return (
    <g>
      <rect x={x} y={y} width={max_width} height={body_height} fill={body_color} rx="4" />
      <rect
        x={x + padding}
        y={y + padding}
        width={max_width - padding * 2}
        height={body_height - padding * 2}
        fill={Gray.p100}
        rx="4"
      />

      <rect x={x} y={y + body_height + 2} width={max_width} height={table_height} fill={body_color} rx="5" />
    </g>
  );
}
