import { main_gradient_v_id } from "../common/MainGradient";
import MotorRotor from "./MotorRotor";

export type Props = {
  x: number;
  y: number;
  is_active: boolean;
};

export default function Motor({ x, y, is_active }: Props) {
  // const color = "brown";

  const max_height = 18;
  const max_width = 36;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={max_width}
        height={max_height}
        rx={4}
        fill={`url(#${main_gradient_v_id})`}
      />

      {/* vertical lines */}
      <rect
        x={x + 5}
        y={y}
        height={max_height}
        width={2}
        fill={`url(#vert_motor_mask)`}
      />

      <rect
        x={x + max_width - 5 - 2}
        y={y}
        height={max_height}
        width={2}
        fill={`url(#vert_motor_mask)`}
      />

      <MotorRotor x={x + 8} y={y} is_active={is_active} />
    </g>
  );
}
