import WarehouseBunkersArea from "../warehouse_bunkers_area/WarehouseBunkersArea";
import WarehouseTransporter from "../warehouse_transporter/WarehouseTransporter";
import WarehouseLineCompose from "./WarehouseLineCompose";
import WarehouseLineVM from "./WarehouseLineVM";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseLineCompose;
};

export default function WarehouseLine({ x, y, ctrl }: Props) {
  return (
    <g>
      <WarehouseLineVM x={x} y={y} ctrl={ctrl} />

      <WarehouseBunkersArea x={x} y={y} ctrl={ctrl.bunkers_area} />

      <WarehouseTransporter
        x={x - 120}
        y={y + 240 - 46}
        ctrl={ctrl.transporter}
      />
    </g>
  );
}
