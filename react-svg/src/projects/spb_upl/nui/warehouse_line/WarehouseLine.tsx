import WarehouseBunkersArea from "../warehouse_bunkers_area/WarehouseBunkersArea";
import WarehouseTransporter from "../warehouse_transporter/WarehouseTransporter";
import WarehouseLineCompose from "./WarehouseLineCompose";
import ContextMenu from "../../../../core/components/context_menu/ContextMenu";
import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import ContextMenuHeader from "../../../../core/components/context_menu/ContextMenuHeader";
import ContextMenuAction from "../../../../core/components/context_menu/ContextMenuAction";
import ContextMenuDivider from "../../../../core/components/context_menu/ContextMenuDivider";
import useObjectsModalsStore from "../../../../stores/objects_modals_store";

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
  const { open_modal } = useObjectsModalsStore();

  return (
    <rect
      x={x}
      y={y}
      width={400}
      height={200}
      stroke="red"
      strokeWidth={1}
      // fill="none"
      onContextMenu={onContextMenu}
    >
      <title>{ctrl.model.sname}</title>

      <ContextMenu top={points.y} left={points.x} active={clicked}>
        <ContextMenuHeader>{ctrl.model.sname}</ContextMenuHeader>

        <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
          test aaaaa
        </ContextMenuAction>

        <ContextMenuDivider />

        <ContextMenuAction onClick={() => open_modal(ctrl.model)}>
          Settings
        </ContextMenuAction>
      </ContextMenu>
    </rect>
  );
}
