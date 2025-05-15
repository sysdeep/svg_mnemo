import { BlueGray, Gray } from "../../../core/nui/lib/palette";
import PLC from "../../../core/views/remote_devices/plc/PLC";
import Server from "../../../core/views/remote_devices/server/Server";

type Props = {
  x: number;
  y: number;
  width: number;
  height?: number;
};

export default function BarHud({ x, y, width, height = 80 }: Props) {
  return (
    <g>
      {/* bg */}
      <rect x={x} y={y} width={width} height={height} fill={BlueGray.p300} />

      <Server x={x + 70} y={y + 10} hb_state={true} />
      <PLC x={x + 130} y={y + 10} hb_state={true} />
    </g>
  );
}
