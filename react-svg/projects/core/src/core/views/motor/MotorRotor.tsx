import { useEffect } from "react";
import useCycle from "../../lib/useCycle";
import { Yellow } from "../../nui/lib/palette";

type RotorProps = {
  x: number;
  y: number;
  is_active: boolean;
};

export default function MotorRotor({ x, y, is_active }: RotorProps) {
  const max_height = 18;
  const frames = 3;
  const chunk_height = 2;

  const { value: chunks, next } = useCycle<boolean>(
    [...Array(max_height / chunk_height)].map((_, i) => {
      return i % frames ? false : true;
    }),
    true
  );

  useEffect(() => {
    let timer = setInterval(() => {
      if (is_active) {
        next();
      }
    }, 300);
    return () => clearInterval(timer);
  }, [is_active]);

  return (
    <g>
      {/* <rect x={x} y={y} width={20} height={max_height} fill="purple" /> */}

      {chunks.map((ch_state, i) => {
        let c = ch_state ? Yellow.p400 : "none";
        // let c = ch_state ? "yellow" : "none";
        return (
          <rect
            x={x}
            y={y + i * chunk_height}
            width={20}
            height={chunk_height}
            fill={c}
            key={i}
          />
        );
      })}

      {/* gradient mask */}
      <rect
        x={x}
        y={y}
        width={20}
        height={max_height}
        opacity={0.4}
        // transform="rotate(90)"
        // fill={`url(#${main_gradient_v_id})`}
        fill={`url(#vert_motor_mask)`}
      />
    </g>
  );
}
