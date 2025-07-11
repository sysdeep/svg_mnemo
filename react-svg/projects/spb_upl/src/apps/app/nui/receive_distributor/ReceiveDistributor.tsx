import ReceiveDistributorCtrl from "./ReceiveDistributorCtrl";
import ReceiveDistributorView from "./ReceiveDistributorView";

type Props = {
  x: number;
  y: number;
  ctrl: ReceiveDistributorCtrl;
};

export const receive_distributor_max_width = 200;
export const receive_distributor_max_height = 60;

export default function ReceiveDistributor({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <ReceiveDistributorView
        x={x}
        y={y}
        width={receive_distributor_max_width}
        height={receive_distributor_max_height}
        ctrl={ctrl}
      />
    </g>
  );
}
