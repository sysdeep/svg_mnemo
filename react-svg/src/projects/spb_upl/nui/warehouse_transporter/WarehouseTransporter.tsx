import TransporterMotor from "../transporter_motor/TransporterMotor";
import WarehouseTransporterCtrl from "./WarehouseTransporterCtrl";
import WarehouseTransporterVM from "./WarehouseTransporterVM";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseTransporterCtrl;
};

export default function WarehouseTransporter({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <WarehouseTransporterVM x={x} y={y} ctrl={ctrl} />

      <TransporterMotor x={x + 40} y={y + 8} ctrl={ctrl.motor} />
    </g>
  );
}
