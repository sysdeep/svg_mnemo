import PowerSupplyArea from "../power_supply_area/PowerSupplyArea";
import ReceiveArea, { bunkers_area_max_height, bunkers_area_max_width } from "../receive_area/ReceiveArea";
import WarehouseArea from "../warehouse_area/WarehouseArea";
import UploadSystemCtrl from "./UploadSystemCtrl";

type Props = {
  x: number;
  y: number;
  max_width: number;
  max_height: number;
  ctrl: UploadSystemCtrl;
};

export default function UploadSystem({ x, y, max_width, max_height, ctrl }: Props) {
  const bunkers_top_y = 280;
  const bunkers_top_x = 10;
  const bunkers_bottom_y = bunkers_top_y + bunkers_area_max_height + 36;
  const bunkers_bottom_x = bunkers_top_x + (bunkers_area_max_width + 36) / 2;

  return (
    <g>
      <rect x={x} y={y} width={max_width} height={max_height} fill="red" fillOpacity={0.2} />

      <PowerSupplyArea x={x} y={y} ctrl={ctrl.power_supply_area} />
      <WarehouseArea x={x + max_width - 460} y={y + 20} ctrl={ctrl.warehouse_area} />

      {/* receivers */}
      {ctrl.receive_areas.map((rctrl, i) => {
        let bx, by;
        if (i < 3) {
          bx = x + bunkers_top_x + (bunkers_area_max_width + 36) * i;
          by = y + bunkers_top_y;
        } else {
          bx = x + bunkers_bottom_x + (bunkers_area_max_width + 36) * (i - 3);
          by = y + bunkers_bottom_y;
        }
        return <ReceiveArea x={bx} y={by} ctrl={rctrl} key={i} />;
      })}
    </g>
  );
}
