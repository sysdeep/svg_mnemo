import StroboscopeCtrl from "./StroboscopeCtrl";
import StroboscopeView from "./StroboscopeView";

type Props = {
  x: number;
  y: number;
  ctrl: StroboscopeCtrl;
};

export default function Stroboscope({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <StroboscopeView x={x} y={y} ctrl={ctrl} />
    </g>
  );
}
