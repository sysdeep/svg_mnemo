import PowerSupplyArea from "../power_supply_area/PowerSupplyArea";
import WarehouseArea from "../warehouse_area/WarehouseArea";
import UploadSystemCtrl from "./UploadSystemCtrl";

type Props = {
  x: number;
  y: number;
  max_width: number;
  ctrl: UploadSystemCtrl;
};

export default function UploadSystem({ x, y, max_width, ctrl }: Props) {
  return (
    <g>
      <rect x={x} y={y} width={max_width} height={500} fill="red" fillOpacity={0.2} />

      <PowerSupplyArea x={x} y={y} ctrl={ctrl.power_supply_area} />
      <WarehouseArea x={x + max_width - 460} y={y + 20} ctrl={ctrl.warehouse_area} />
    </g>
  );
}
