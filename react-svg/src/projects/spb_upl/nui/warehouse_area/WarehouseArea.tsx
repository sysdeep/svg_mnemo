import WarehouseLine from "../warehouse_line/WarehouseLine";
import WarehouseAreaCtrl from "./WarehouseAreaCtrl";
import WarehouseAreaVM from "./WarehouseAreaVM";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseAreaCtrl;
};

export default function WarehouseArea({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <WarehouseAreaVM x={x} y={y} ctrl={ctrl} />

      {/* compose */}
      {ctrl.lines.map((line_ctrl, i) => {
        return <WarehouseLine x={x} y={y + 260 * i} ctrl={line_ctrl} key={i} />;
      })}
    </g>
  );
}
