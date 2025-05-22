import { ReactNode, useState } from "react";
import { Gray } from "../../lib/palette";
import { ERROR_COLOR } from "./modal_data";

type Props = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  onClick: () => void;
  children: ReactNode;
  title?: string;
};

export default function Button({ x, y, width = 64, height = 24, onClick, children, title }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const cursor = hover ? "pointer" : "arrow";
  const font_size = 14;

  return (
    <g
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      cursor={cursor}
      onClick={(e) => e.button === 0 && onClick()}>
      <rect x={x} y={y} rx={2} width={width} height={height} fill={ERROR_COLOR} />
      <text
        x={x + width / 2}
        y={y + font_size + (height - font_size) / 2}
        fontSize={font_size}
        fill={Gray.p600}
        textAnchor="middle">
        {children}
      </text>
      {title && <title>{title}</title>}
    </g>
  );
}
