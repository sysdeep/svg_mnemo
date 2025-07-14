import BellCtrl from "./BellCtrl";
import BellView from "./BellView";

type Props = {
  x: number;
  y: number;
  ctrl: BellCtrl;
};

export default function Bell({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <BellView x={x} y={y} ctrl={ctrl} />
    </g>
  );
}
