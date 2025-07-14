import DSensorNormalView from "@src/core/nui/units/dsensor/DSensorNormalView";
import FreqConvCtrl from "./FreqConvCtrl";
import FreqConvView from "./FreqConvView";

type Props = {
  x: number;
  y: number;
  ctrl: FreqConvCtrl;
};

export default function FreqConv({ x, y, ctrl }: Props) {
  const sensor_size = 8;
  return (
    <g>
      {/* self */}
      <FreqConvView x={x} y={y} ctrl={ctrl} />

      {/* sensors */}
      {ctrl.sensors.map((sensor_ctrl, i) => {
        return (
          <DSensorNormalView x={x + 2 + sensor_size * i} y={y + 2} size={sensor_size} ctrl={sensor_ctrl} key={i} />
        );
      })}
    </g>
  );
}
