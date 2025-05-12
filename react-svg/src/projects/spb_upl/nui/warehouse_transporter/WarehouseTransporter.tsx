import ContextMenuAction from "../../../../core/components/context_menu/ContextMenuAction";
import TransporterMotor from "../transporter_motor/TransporterMotor";
import WarehouseTransporterCtrl from "./WarehouseTransporterCtrl";
import WarehouseTransporterVM from "./WarehouseTransporterVM";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseTransporterCtrl;
};

export default function WarehouseTransporter({ x, y, ctrl }: Props) {
  const add_menu_items = (
    <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
      {ctrl.motor.model.sname}
    </ContextMenuAction>
  );

  return (
    <g>
      {/* self */}
      <WarehouseTransporterVM
        x={x}
        y={y}
        ctrl={ctrl}
        menu_items={add_menu_items}
      />

      <TransporterMotor x={x + 40} y={y + 8} ctrl={ctrl.motor} />
    </g>
  );
}
