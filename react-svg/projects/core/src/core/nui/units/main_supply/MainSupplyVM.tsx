import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import MainSupplyProto, { MainSupplyState } from "./MainSupplyProto";

type Props = {
  x: number;
  y: number;
  ctrl: MainSupplyProto;
};

const max_width = 50;
const max_height = 60;

export default function MainSupplyVM({ x, y, ctrl }: Props) {
  const state = useCtrlState<MainSupplyState>(ctrl);
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
