import { useEffect, useState } from "react";
import { Amber } from "../../core/nui/lib/palette";

type Props = {
  x: number;
  y: number;
};

export default function VibroTray({ x, y }: Props) {
  const max_size = 24;
  let padding = 2;
  let paddings = [0, 1, 2, 3, 4];

  const frames: Frame[] = paddings.map((p) => {
    let size = max_size - p * padding * 2;
    return { size, is_active: false, p };
  });

  const [aindex, setAindex] = useState<number>(-1);

  // useEffect(() => {
  //   let int = setInterval(() => {
  //     setAindex((i) => {
  //       return (i + 1) % paddings.length;
  //     });
  //   }, 300);

  //   return () => clearInterval(int);
  // }, []);

  return (
    <g>
      {frames.map((f, i) => {
        return (
          <rect
            key={i}
            x={x + f.p * 2}
            y={y + f.p * 2}
            width={f.size}
            height={f.size}
            fill={paddings.length - aindex === i ? Amber.p100 : Amber.p500}
            stroke="black"
            strokeWidth={0.2}
          />
        );
      })}
    </g>
  );
}

type Frame = {
  size: number;
  p: number;
  is_active: boolean;
};
