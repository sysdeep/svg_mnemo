import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import WarehouseAreaProto from "./WarehouseAreaProto";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseAreaProto;
};

export default function WarehouseAreaVM({ x, y, ctrl }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect x={x} y={y} width={420} height={780} rx={5} fillOpacity={0.2}>
        <title>{ctrl.model.sname}</title>
      </rect>
    </ObjectContextMenuWrapper>
  );
}
