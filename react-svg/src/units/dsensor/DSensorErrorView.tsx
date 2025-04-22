import DSensorCompose from "./DSensorCompose";
import DSensorView from "./DSensorView";

export type DSensorErrorProps = {
  x: number;
  y: number;
  vm: DSensorCompose;
  size?: number;
};

export default function DSensorErrorView({
  x,
  y,
  vm,
  size = 12,
}: DSensorErrorProps) {
  return <DSensorView x={x} y={y} size={size} default_color="red" vm={vm} />;
}
