export type SensorProps = {
  x: number;
  y: number;
  color: string;
  size: number;
  onClick: () => void;
};

export default function Sensor({ x, y, color, size, onClick }: SensorProps) {
  return (
    <circle
      cx={x}
      cy={y}
      r={size / 2}
      fill={color}
      onMouseDown={() => onClick()}
    />
  );
}
