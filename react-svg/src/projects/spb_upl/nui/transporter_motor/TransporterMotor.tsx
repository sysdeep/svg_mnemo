import TransporterMotorCtrl from "./TransporterMotorCtrl";
import MotorVM from "../../../../core/nui/units/motor/MotorVM";
import DSensorNormalView from "../../../../core/nui/units/dsensor/DSensorNormalView";

export type Props = {
  x: number;
  y: number;
  ctrl: TransporterMotorCtrl;
};

export default function TransporterMotor({ x, y, ctrl }: Props) {
  const sensors_view = ctrl.sensors.map((sc, i) => {
    const sx = 38 + x + i * 10;
    const sy = y;
    return <DSensorNormalView x={sx} y={sy} ctrl={sc} key={i} size={8} />;
  });

  return (
    <g>
      {/* self */}
      <MotorVM x={x} y={y} ctrl={ctrl} />

      {sensors_view}
    </g>
  );
}
