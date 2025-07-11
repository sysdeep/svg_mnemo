import ReceiveBunker, { bunker_max_height, bunker_max_width } from "../receive_bunker/ReceiveBunker";
import ReceiveDistributor, { receive_distributor_max_width } from "../receive_distributor/ReceiveDistributor";
import ReceiveAreaCtrl from "./ReceiveAreaCtrl";
import ReceiveAreaView from "./ReceiveAreaView";

type Props = {
  x: number;
  y: number;
  ctrl: ReceiveAreaCtrl;
};

export const bunkers_area_max_width = 388;
export const bunkers_area_max_height = 200;

export default function ReceiveArea({ x, y, ctrl }: Props) {
  const bunkers_y = y + bunkers_area_max_height - bunker_max_height - 4;
  return (
    <g>
      {/* self */}
      <ReceiveAreaView x={x} y={y} width={bunkers_area_max_width} height={bunkers_area_max_height} ctrl={ctrl} />

      {/* distributor */}
      <ReceiveDistributor
        x={x + (bunkers_area_max_width - receive_distributor_max_width) / 2}
        y={y + 4}
        ctrl={ctrl.distributor}
      />

      {/* bunkers */}
      {ctrl.bunkers.map((bunker_ctrl, i) => {
        return <ReceiveBunker x={x + (bunker_max_width + 4) * i + 4} y={bunkers_y} ctrl={bunker_ctrl} key={i} />;
      })}
    </g>
  );
}
