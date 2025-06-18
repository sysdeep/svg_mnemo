import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import { PowerSupplyControllerProto, PowerSupplyControllerState } from "./PowerSupplyControllerProto";

type Props = {
  x: number;
  y: number;
  ctrl: PowerSupplyControllerProto;
};

const max_width = 24;
const max_height = 60;

export default function PowerSupplyControllerVM({ x, y, ctrl }: Props) {
  const state = useCtrlState<PowerSupplyControllerState>(ctrl);
  const color = "brown";
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <rect width={max_width} height={max_height} x={x} y={y} rx={5} fill={color} />
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
