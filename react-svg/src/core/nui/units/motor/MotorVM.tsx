import MotorProto, { MotorState } from "./MotorProto";
import useCtrlState from "../../components/useCtrlState";
import BlockEffect from "../../components/BlockEffect";
import ErrorEffect from "../../components/ErrorEffect";
import Motor from "../../../views/motor/Motor";
import ObjectContextMenuWrapper from "../../components/ObjectContextMenuWrapper";

export type Props = {
  x: number;
  y: number;
  ctrl: MotorProto;
};

export default function MotorVM({ x, y, ctrl }: Props) {
  const state = useCtrlState<MotorState>(ctrl);

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <Motor x={x} y={y} is_active={state.logic > 0} />
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
