import { LampColor } from "../../../views/lamp/lamp_color";
import DSensorCompose from "./DSensorProto";
import DSensorView from "./DSensorView";

export type DSensorNormalProps = {
  x: number;
  y: number;
  ctrl: DSensorCompose;
  size?: number;
};

export default function DSensorNormalView({
  x,
  y,
  ctrl,
  size = 12,
}: DSensorNormalProps) {
  return (
    <DSensorView
      x={x}
      y={y}
      size={size}
      default_color={LampColor.green}
      ctrl={ctrl}
    />
  );
}
