import Lamp from "../../../views/lamp/Lamp";
import { LampColor } from "../../../views/lamp/lamp_color";
import ObjectContextMenuWrapper from "../../components/ObjectContextMenuWrapper";
import useCtrlState from "../../components/useCtrlState";
import DSensorCompose from "./DSensorProto";

export type DSensorProps = {
  x: number;
  y: number;
  ctrl: DSensorCompose;
  default_color?: LampColor;
  size?: number;
};

export default function DSensorView({ x, y, ctrl, size = 12, default_color = LampColor.green }: DSensorProps) {
  const state = useCtrlState(ctrl);

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <Lamp x={x} y={y} size={size} color={default_color} state={state.is_state} />
      <title>{ctrl.model.sname}</title>
    </ObjectContextMenuWrapper>
  );
}
