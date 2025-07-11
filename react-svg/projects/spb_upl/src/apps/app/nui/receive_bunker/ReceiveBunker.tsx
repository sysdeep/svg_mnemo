import BunkerView from "@src/core/nui/units/bunker/BunkerView";
import ReceiveBunkerCtrl from "./ReceiveBunkerCtrl";
import BunkerGeometry from "@src/core/views/bunker/bunker_geometry";
import BunkerStorage from "../bunker_storage/BunkerStorage";
import DSensorNormalView from "@src/core/nui/units/dsensor/DSensorNormalView";

type Props = {
  x: number;
  y: number;
  ctrl: ReceiveBunkerCtrl;
};

export const bunker_max_width = 60;
export const bunker_max_height = 74;
const conus_height = 20;

const bunker_geometry: BunkerGeometry = {
  max_width: bunker_max_width,
  conus_height: conus_height,
  out_width: 10,
  top_height: bunker_max_height - conus_height,
};

export default function ReceiveBunker({ x, y, ctrl }: Props) {
  // const trays_matrix = [...Array(Math.ceil(ctrl.vibro_trays.length / 3))].map((_, i) => {
  //   const start = i * 3;
  //   const end = start + 3;
  //   return ctrl.vibro_trays.slice(start, end);
  // });

  // # level meters
  //       self._level_meters = []

  //       x = 2
  //       y = 22
  //       for _ in self._compose.level_meters:
  //           lm = SensorNormal(size=10, parent=self)
  //           lm.setPos(x, y)
  //           y += lm.boundingRect().height() + 4
  //           self._level_meters.append(lm)

  return (
    <g>
      <BunkerView x={x} y={y} ctrl={ctrl} geometry={bunker_geometry} />

      {/* storage */}
      <BunkerStorage x={x} y={y} width={bunker_max_width} height={30} ctrl={ctrl.storage} />

      {/* level meters */}
      {ctrl.level_meters.map((lm_ctrl, i) => {
        return <DSensorNormalView x={x + 4} y={y + 24 + 16 * i} ctrl={lm_ctrl} size={10} key={i} />;
      })}
      {/* {ctrl.auto_mode_sensor && <DSensorNormalView ctrl={ctrl.auto_mode_sensor} x={x + 2} y={y + 2} />} */}

      {/* {ctrl.ready_sensor && <DSensorNormalView ctrl={ctrl.ready_sensor} x={x + 2 + 16} y={y + 2} />} */}

      {/* vibrators */}
      {/* {trays_matrix.map((vtrow, iy) => {
        return vtrow.map((vtm, ix) => {
          return <BunkerVibroTray x={x + 4 + ix * 30} y={y + 4 + 24 + iy * 30} ctrl={vtm} key={ix + "-" + iy} />;
        });
      })} */}
    </g>
  );
}
