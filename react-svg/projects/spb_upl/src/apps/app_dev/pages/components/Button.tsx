import { ReactNode, useState } from "react";
import { Gray } from "../../../../core/nui/lib/palette";

type Props = {
  x: number;
  y: number;
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ x, y, children, onClick }: Props) {
  const [enter, setEnter] = useState<boolean>(false);

  const cursor = enter ? "pointer" : "arrow";
  return (
    <g
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      cursor={cursor}
      onClick={() => onClick()}>
      <rect x={x} y={y} width={24 * 4} height={24} fill={Gray.p300} rx={4} />
      <text x={x + (24 * 4) / 2} y={y + 18} fontSize={12} textAnchor="middle">
        {children}
      </text>
    </g>
  );
}
