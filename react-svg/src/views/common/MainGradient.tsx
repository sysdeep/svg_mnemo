import { Amber, Red } from "../../core/nui/lib/palette";

export const main_gradient_id = "main_gradient";

export default function MainGradient() {
  return (
    <linearGradient id={main_gradient_id}>
      <stop offset="0%" stopColor={Red.p900} />
      <stop offset="50%" stopColor={Amber.p700} />
      <stop offset="100%" stopColor={Red.p900} />
    </linearGradient>
  );
}
