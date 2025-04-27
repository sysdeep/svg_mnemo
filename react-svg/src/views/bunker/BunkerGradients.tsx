export const out_line_gradient_id = "bunker_out_line_gradient";
export const middle_line_gradient_id = "bunker_middle_line_gradient";

export default function BunkerGradients() {
  return (
    <>
      {/* out line */}
      <linearGradient id={out_line_gradient_id}>
        <stop offset="0%" stopColor="#4E342E" />
        <stop offset="50%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#4E342E" />
      </linearGradient>

      {/* middle line */}
      <linearGradient id={middle_line_gradient_id}>
        <stop offset="0%" stopColor="#27272A" />
        <stop offset="50%" stopColor="#D4D4D8" />
        <stop offset="100%" stopColor="#27272A" />
      </linearGradient>
    </>
  );
}
