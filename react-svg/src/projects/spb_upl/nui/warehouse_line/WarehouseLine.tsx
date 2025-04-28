import WarehouseBunkersArea from "../warehouse_bunkers_area/WarehouseBunkersArea";
import WarehouseTransporter from "../warehouse_transporter/WarehouseTransporter";
import WarehouseLineCompose from "./WarehouseLineCompose";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseLineCompose;
};

export default function WarehouseLine({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* <rect
        x={x}
        y={y}
        width={400}
        height={200}
        stroke="red"
        strokeWidth={1}
        fill="none"
      /> */}

      {/* bunkers area */}
      <WarehouseBunkersArea x={x} y={y} ctrl={ctrl.bunkers_area} />

      <WarehouseTransporter
        x={x + 40}
        y={y + 240 - 46}
        ctrl={ctrl.transporter}
      />
    </g>
  );
}
