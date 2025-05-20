import MainSupplyCtrl from "./MainSupplyCtrl";
import MainSupplyVM from "../../../../core/nui/units/main_supply/MainSupplyVM";
import DSensorNormalView from "../../../../core/nui/units/dsensor/DSensorNormalView";
import DSensorErrorView from "../../../../core/nui/units/dsensor/DSensorErrorView";

export type MainSupplyProps = {
  x: number;
  y: number;
  ctrl: MainSupplyCtrl;
};

export default function MainSupply({ x, y, ctrl }: MainSupplyProps) {
  console.log("msc render");

  const sensors_view = ctrl.sensors.map((m, i) => {
    let p = (12 + 4) * i;
    return <DSensorNormalView x={x + 10} y={y + 10 + p} ctrl={m} key={i} />;
  });

  return (
    <g>
      {/* self */}
      <MainSupplyVM x={x} y={y} ctrl={ctrl} />

      {/* sensors */}
      {sensors_view}

      {/* emergency */}
      <DSensorErrorView x={x + 30} y={y + 14} size={24} ctrl={ctrl.emergency_sensor} />
    </g>
  );
}
