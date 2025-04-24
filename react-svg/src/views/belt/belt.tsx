import { useEffect, useState } from "react";
import Line from "./line";
import Wheel from "./wheel";

type Props = {
  x: number;
  y: number;
};

export default function Belt({ x, y }: Props) {
  const [angle, setAngle] = useState<number>(0);

  // useEffect(() => {
  //   let int = setInterval(() => {
  //     setAngle((a) => a + 30);
  //   }, 300);

  //   return () => clearInterval(int);
  // }, []);

  const max_chunks = 16;

  return (
    <g>
      <Line
        x={x + 18}
        y={y}
        chunks_count={max_chunks}
        angle={angle}
        angle_step={30}
        is_forward={true}
      />
      <Line
        x={x + 18}
        y={y + 36}
        chunks_count={max_chunks}
        angle={angle}
        angle_step={30}
        is_forward={false}
      />

      <Wheel x={x} y={y} angle={angle} />
      <Wheel x={x + 16 * max_chunks} y={y} angle={angle} />
    </g>
  );
}
