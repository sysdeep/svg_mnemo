import Lamp from "../../../views/lamp/Lamp";
import { LampColor } from "../../../views/lamp/lamp_color";
import BlockEffect from "../../components/BlockEffect";
import ErrorEffect from "../../components/ErrorEffect";
import ObjectContextMenuWrapper from "../../components/ObjectContextMenuWrapper";
import UncontrolEffect from "../../components/UncontrolEffect";
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
      <BlockEffect st={state.is_block}>
        <UncontrolEffect st={!state.is_control}>
          <ErrorEffect st={state.is_error}>
            <Lamp x={x} y={y} size={size} color={default_color} state={state.is_state} />
          </ErrorEffect>
        </UncontrolEffect>
        <title>{ctrl.model.sname}</title>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
