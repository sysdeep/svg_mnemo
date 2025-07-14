import DSensorNormalView from "@src/core/nui/units/dsensor/DSensorNormalView";
import FreqConv from "../freq_conv/FreqConv";
import Stroboscope from "../stroboscope/Stroboscope";
import TransporterMotor from "../transporter_motor/TransporterMotor";
import ReceiveDistributorCtrl from "./ReceiveDistributorCtrl";
import ReceiveDistributorView from "./ReceiveDistributorView";

type Props = {
  x: number;
  y: number;
  ctrl: ReceiveDistributorCtrl;
};

export const receive_distributor_max_width = 380;
export const receive_distributor_max_height = 60;

export default function ReceiveDistributor({ x, y, ctrl }: Props) {
  const point_size = 16;
  const point_span = Math.floor(receive_distributor_max_width / ctrl.points.length);

  return (
    <g>
      {/* self */}
      <ReceiveDistributorView
        x={x}
        y={y + 30}
        width={receive_distributor_max_width}
        height={receive_distributor_max_height}
        ctrl={ctrl}
      />

      {/* motor */}
      <TransporterMotor x={x + receive_distributor_max_width - 40} y={y} ctrl={ctrl.motor} />

      {/* freq conv */}
      <FreqConv x={x + receive_distributor_max_width - 30} y={y + 30} ctrl={ctrl.freq_conv} />

      {/* stroboscope */}
      <Stroboscope x={x + 4} y={y + 30} ctrl={ctrl.stroboscope} />

      {/* points */}
      {ctrl.points.map((point_ctrl, i) => {
        return (
          <DSensorNormalView
            x={x + (point_span - point_size) / 2 + point_span * i}
            y={y + 90}
            size={point_size}
            ctrl={point_ctrl}
            key={i}
          />
        );
      })}
    </g>
  );
}
