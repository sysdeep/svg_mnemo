import { useEffect, useState } from "react";
import useCycle from "../../core/lib/useCycle";
import { main_gradient_id, main_gradient_v_id } from "../common/MainGradient";
import { Yellow } from "../../core/nui/lib/palette";

export type Props = {
  x: number;
  y: number;
};

export default function Motor({ x, y }: Props) {
  const color = "brown";

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={40}
        height={20}
        rx={4}
        fill={`url(#${main_gradient_v_id})`}
      />
      ;
      <Rotor x={x + 10} y={y + 1} />
    </g>
  );
}

type RotorProps = {
  x: number;
  y: number;
};
function Rotor({ x, y }: RotorProps) {
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
      next();
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <g>
      {/* <rect x={x} y={y} width={20} height={max_height} fill="purple" /> */}

      {chunks.map((ch_state, i) => {
        // let c = ch_state ? Yellow.p50 : "none";
        let c = ch_state ? "yellow" : "none";
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
        opacity={0.3}
        // transform="rotate(90)"
        // fill={`url(#${main_gradient_v_id})`}
        fill={`url(#vert_motor_mask)`}
      />
    </g>
  );
}
