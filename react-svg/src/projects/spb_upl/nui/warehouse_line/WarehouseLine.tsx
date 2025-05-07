import WarehouseBunkersArea from "../warehouse_bunkers_area/WarehouseBunkersArea";
import WarehouseTransporter from "../warehouse_transporter/WarehouseTransporter";
import WarehouseLineCompose from "./WarehouseLineCompose";
import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseLineCompose;
};

export default function WarehouseLine({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <WarehouseLineVM x={x} y={y} ctrl={ctrl} />

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

function WarehouseLineVM({ x, y, ctrl }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();

  return (
    <rect
      x={x}
      y={y}
      width={400}
      height={200}
      // stroke="red"
      // strokeWidth={1}
      fillOpacity={0}
      onContextMenu={onContextMenu}
    >
      <title>{ctrl.model.sname}</title>

      <ObjectContextMenu
        model={ctrl.model}
        top={points.y}
        left={points.x}
        active={clicked}
      ></ObjectContextMenu>
    </rect>
  );
}
