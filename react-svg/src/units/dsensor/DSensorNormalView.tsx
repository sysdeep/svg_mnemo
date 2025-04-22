import DSensorCompose from "./DSensorCompose";
import DSensorView from "./DSensorView";

export type DSensorNormalProps = {
  x: number;
  y: number;
  vm: DSensorCompose;
  size?: number;
};

export default function DSensorNormalView({
  x,
  y,
  vm,
  size = 12,
}: DSensorNormalProps) {
  return <DSensorView x={x} y={y} size={size} default_color="green" vm={vm} />;
}
