import { LampColor } from "../../views/lamp/lamp_color";
import DSensorCompose from "./DSensorCompose";
import DSensorView from "./DSensorView";

export type DSensorErrorProps = {
  x: number;
  y: number;
  ctrl: DSensorCompose;
  size?: number;
};

export default function DSensorErrorView({
  x,
  y,
  ctrl,
  size = 12,
}: DSensorErrorProps) {
  return (
    <DSensorView
      x={x}
      y={y}
      size={size}
      default_color={LampColor.red}
      ctrl={ctrl}
    />
  );
}
