import WarehouseBunkersArea from "../warehouse_bunkers_area/WarehouseBunkersArea";
import WarehouseTransporter from "../warehouse_transporter/WarehouseTransporter";

type Props = {
  x: number;
  y: number;
};

export default function WarehouseLine({ x, y }: Props) {
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
      <WarehouseBunkersArea x={x} y={y} />

      <WarehouseTransporter x={x + 40} y={y + 200 - 46} />
    </g>
  );
}
