import useCtrlState from "@src/core/nui/components/useCtrlState";
import BunkerStorageProto from "./BunkerStorageProto";
import ObjectContextMenuWrapper from "@src/core/nui/components/ObjectContextMenuWrapper";
import { Yellow } from "@src/core/nui/lib/palette";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  ctrl: BunkerStorageProto;
};

// export const WarehouseBunkerRect = {
//   width: 3 * 28 + 2 * 4,
//   height: 190,
// };

export default function BunkerStorageView({ x, y, width, height, ctrl }: Props) {
  const state = useCtrlState(ctrl);

  const material_item_y = y + 18;

  // TODO: material name
  // TODO: material color
  // TODO: weight format

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <title>{ctrl.model.sname}</title>

      {/* self ghost */}
      {/* <rect x={x} y={y} width={width} height={height} fillOpacity={0.8} color="green" /> */}

      {/* material item */}
      <line x1={x} y1={material_item_y} x2={x + width} y2={material_item_y} stroke="brown" strokeWidth={2} />

      {/* material name */}
      <text x={x + width / 2} y={y + 14} fill={Yellow.p200} textAnchor="middle">
        name
      </text>

      {/* curr weight */}
      <text x={x + width - 4} y={y + height} fill={Yellow.p200} textAnchor="end">
        {state.cur_mat_weight}
      </text>
    </ObjectContextMenuWrapper>
  );
}
