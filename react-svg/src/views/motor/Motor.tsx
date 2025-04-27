export type Props = {
  x: number;
  y: number;
};

export default function Motor({ x, y }: Props) {
  const color = "brown";

  return (
    <g>
      <rect x={x} y={y} width={40} height={20} rx={4} fill={color} />;
      <Rotor x={x + 10} y={y} />
    </g>
  );
}

type RotorProps = {
  x: number;
  y: number;
};
function Rotor({ x, y }: RotorProps) {
  return (
    <g>
      <rect x={x} y={y} width={20} height={20} fill="purple" />
    </g>
  );
}
