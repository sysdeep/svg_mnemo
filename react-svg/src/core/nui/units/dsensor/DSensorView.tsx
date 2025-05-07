import useContextMenu from "../../../components/context_menu/useContextMenu";
import Lamp from "../../../views/lamp/Lamp";
import { LampColor } from "../../../views/lamp/lamp_color";
import ObjectContextMenu from "../../components/ObjectContextMenu";
import useCtrlState from "../../components/useCtrlState";
import DSensorCompose from "./DSensorProto";

export type DSensorProps = {
  x: number;
  y: number;
  ctrl: DSensorCompose;
  default_color?: LampColor;
  size?: number;
};

export default function DSensorView({
  x,
  y,
  ctrl,
  size = 12,
  default_color = LampColor.green,
}: DSensorProps) {
  const state = useCtrlState(ctrl);

  const { clicked, points, onContextMenu } = useContextMenu();

  return (
    <g onContextMenu={onContextMenu}>
      <Lamp
        x={x}
        y={y}
        size={size}
        color={default_color}
        state={state.is_state}
      />
      <title>{ctrl.model.sname}</title>
      <ObjectContextMenu
        model={ctrl.model}
        top={points.y}
        left={points.x}
        active={clicked}
      ></ObjectContextMenu>
    </g>
  );
}
