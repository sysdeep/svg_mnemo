import PowerSupplySensor from "../power_supply_sensor/PowerSupplySensor";
import PowerSupplyAreaCtrl from "./PowerSupplyAreaCtrl";
import PowerSupplyAreaVM from "./PowerSupplyAreaVM";

type Props = {
  x: number;
  y: number;
  ctrl: PowerSupplyAreaCtrl;
};

export default function PowerSupplyArea({ x, y, ctrl }: Props) {
  const inner_padding = 4;

  // const ctrl_width = 24;
  const ctrl_height = 24;
  return (
    <g>
      {/* self */}
      <PowerSupplyAreaVM
        x={x}
        y={y}
        max_width={240}
        max_heigh={2 * inner_padding + (ctrl_height + inner_padding) * ctrl.controllers.length - inner_padding}
        ctrl={ctrl}
      />

      {/* compose */}
      {ctrl.controllers.map((sctrl, i) => {
        return (
          <PowerSupplySensor
            x={x + inner_padding}
            y={y + inner_padding + (ctrl_height + inner_padding) * i}
            ctrl={sctrl}
            key={i}
          />
        );
      })}
    </g>
  );
}
