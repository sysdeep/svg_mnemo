import DSensorNormalView from "../../../../core/nui/units/dsensor/DSensorNormalView";
import BunkerVibroTray from "../bunker_vibro_tray/BunkerVibroTray";
import WarehouseBunkerCtrl from "./WarehouseBunkerCtrl";
import WarehouseBunkerVM from "./WarehouseBunkerVM";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseBunkerCtrl;
};

export default function WarehouseBunker({ x, y, ctrl }: Props) {
  const trays_matrix = [...Array(Math.ceil(ctrl.vibro_trays.length / 3))].map((_, i) => {
    const start = i * 3;
    const end = start + 3;
    return ctrl.vibro_trays.slice(start, end);
  });

  return (
    <g>
      <WarehouseBunkerVM x={x} y={y} ctrl={ctrl} />

      {ctrl.auto_mode_sensor && <DSensorNormalView ctrl={ctrl.auto_mode_sensor} x={x + 2} y={y + 2} />}

      {ctrl.ready_sensor && <DSensorNormalView ctrl={ctrl.ready_sensor} x={x + 2 + 16} y={y + 2} />}

      {/* vibrators */}
      {trays_matrix.map((vtrow, iy) => {
        return vtrow.map((vtm, ix) => {
          return <BunkerVibroTray x={x + 4 + ix * 30} y={y + 4 + 24 + iy * 30} ctrl={vtm} key={ix + "-" + iy} />;
        });
      })}
    </g>
  );
}
