import { Gray } from "../../../../core/nui/lib/palette";
import DSensorNormalView from "../../../../core/nui/units/dsensor/DSensorNormalView";
import { PowerSupplySensorCtrl } from "./PowerSupplySensorCtrl";
type Props = {
  x: number;
  y: number;
  ctrl: PowerSupplySensorCtrl;
};

export default function PowerSupplySensor({ x, y, ctrl }: Props) {
  return (
    <g>
      <DSensorNormalView x={x} y={y} ctrl={ctrl} size={24} />
      <text x={x + 24 + 8} y={y + 16 + (24 - 16) / 2} fontSize={16} fill={Gray.p700}>
        {ctrl.model.sname}
      </text>
    </g>
  );
}
