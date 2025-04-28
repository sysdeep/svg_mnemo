import { Amber, Gray, Red } from "../../core/nui/lib/palette";

export const main_gradient_id = "main_gradient";
export const main_gradient_v_id = "main_gradient_v";

export default function MainGradient() {
  return (
    <g>
      {/* horizontal */}
      <linearGradient id={main_gradient_id}>
        <stop offset="0%" stopColor={Red.p900} />
        <stop offset="50%" stopColor={Amber.p700} />
        <stop offset="100%" stopColor={Red.p900} />
      </linearGradient>

      {/* vertical */}
      <linearGradient id={main_gradient_v_id} x1={0} y1={0} x2={0} y2={1}>
        <stop offset="0%" stopColor={Red.p900} />
        <stop offset="50%" stopColor={Amber.p700} />
        <stop offset="100%" stopColor={Red.p900} />
      </linearGradient>

      <linearGradient id="vert_motor_mask" x1={0} y1={0} x2={0} y2={1}>
        <stop offset="0%" stopColor={Gray.p800} />
        <stop offset="50%" stopColor={Gray.p100} />
        <stop offset="100%" stopColor={Gray.p800} />
      </linearGradient>
    </g>
  );
}
