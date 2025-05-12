import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import WarehouseLineProto from "./WarehouseLineProto";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseLineProto;
};

export default function WarehouseLineVM({ x, y, ctrl }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect
        x={x}
        y={y}
        width={420}
        height={240}
        // stroke="red"
        // strokeWidth={1}
        fillOpacity={0.1}
      >
        <title>{ctrl.model.sname}</title>
      </rect>
    </ObjectContextMenuWrapper>
  );
}
