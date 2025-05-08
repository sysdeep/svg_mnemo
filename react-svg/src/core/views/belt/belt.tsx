import { useEffect, useState } from "react";
import Line from "./line";
import Wheel from "./wheel";
import { Direction } from "../../nui/components/enums";

type Props = {
  x: number;
  y: number;
  logic: number;
  direction: Direction;
  chunks_count: number;
};

export default function Belt({ x, y, logic, direction, chunks_count }: Props) {
  const [angle, setAngle] = useState<number>(0);

  useEffect(() => {
    let int: NodeJS.Timeout | null = null;
    if (logic) {
      let dir_k = direction === Direction.forward ? 1 : -1;
      int = setInterval(() => {
        setAngle((a) => {
          let ca = a;
          if (a === 360 && direction === Direction.forward) {
            ca = 0;
          }

          if (a === 0 && direction === Direction.backward) {
            ca = 360;
          }
          return ca + 30 * dir_k;
        });
      }, 300);
    }

    return () => {
      int && clearInterval(int);
    };
  }, [logic, direction]);

  return (
    <g>
      {/* top line */}
      <Line
        x={x + 18}
        y={y}
        chunks_count={chunks_count}
        angle={angle}
        is_forward={direction === Direction.forward}
      />

      {/* bottom line */}
      <Line
        x={x + 18}
        y={y + 36}
        chunks_count={chunks_count}
        angle={angle}
        is_forward={direction === Direction.backward}
      />

      <text x={x} y={y}>
        {angle}
      </text>
      <Wheel x={x} y={y} angle={angle} />
      <Wheel x={x + 16 * chunks_count} y={y} angle={angle} />
    </g>
  );
}
