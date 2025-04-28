import useCtrl from "../../../../units/useCtrl";
import Bunker from "../../../../views/bunker/bunker";
import BunkerGeometry from "../../../../views/bunker/bunker_geometry";
import {
  filter_block_colorize_id,
  filter_error_colorize_id,
  filter_none_colorize_id,
} from "../../../../views/common/MainColorizeFilters";
import BunkerVibroTray from "../bunker_vibro_tray/BunkerVibroTray";
import WarehouseBunkerCtrl, {
  WarehouseBunkerState,
} from "./WarehouseBunkerCtrl";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseBunkerCtrl;
};

export const WarehouseBunkerRect = {
  width: 3 * 28 + 2 * 4,
  height: 160,
};

export default function WarehouseBunker({ x, y, ctrl }: Props) {
  const trays_matrix = [...Array(Math.ceil(ctrl.vibro_trays.length / 3))].map(
    (_, i) => {
      let start = i * 3;
      let end = start + 3;
      return ctrl.vibro_trays.slice(start, end);
    }
  );

  const debug_rect = true;

  return (
    <g>
      {/* debug */}
      {debug_rect && (
        <rect
          x={x}
          y={y}
          width={WarehouseBunkerRect.width}
          height={WarehouseBunkerRect.height}
          stroke="blue"
          strokeWidth={1}
          fill="none"
        />
      )}

      <WarehouseBunkerVM x={x} y={y} ctrl={ctrl} />

      {/* vibrators */}
      {trays_matrix.map((vtrow, iy) => {
        return vtrow.map((vtm, ix) => {
          return (
            <BunkerVibroTray
              x={x + 4 + ix * 30}
              y={y + 4 + iy * 30}
              ctrl={vtm}
              key={ix + "-" + iy}
            />
          );
        });
      })}
    </g>
  );
}

function WarehouseBunkerVM({ x, y, ctrl }: Props) {
  const { state } = useCtrl<WarehouseBunkerState>(ctrl);

  const geo: BunkerGeometry = {
    max_width: WarehouseBunkerRect.width,
    conus_height: 30,
    out_width: 30,
    top_height: 120,
  };

  const filter = get_filter(state);

  return (
    <g onClick={() => ctrl.t_on_click()} filter={`url(#${filter})`}>
      <Bunker x={x} y={y} geometry={geo} />

      {/* error effect */}
      {state.is_error && (
        <rect
          x={x}
          y={y}
          width={geo.max_width}
          height={80}
          fill="red"
          opacity={0.4}
        />
      )}
    </g>
  );
}

function get_filter(state: WarehouseBunkerState): string {
  if (state.is_block) return filter_block_colorize_id;
  if (state.is_error) return filter_error_colorize_id;

  return filter_none_colorize_id;
}
