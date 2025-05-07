import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import Bunker from "../../../../core/views/bunker/bunker";
import BunkerGeometry from "../../../../core/views/bunker/bunker_geometry";
import BunkerVibroTray from "../bunker_vibro_tray/BunkerVibroTray";
import WarehouseBunkerCtrl from "./WarehouseBunkerCtrl";

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
  const state = useCtrlState(ctrl);
  const { clicked, points, onContextMenu } = useContextMenu();

  const geo: BunkerGeometry = {
    max_width: WarehouseBunkerRect.width,
    conus_height: 30,
    out_width: 30,
    top_height: 120,
  };

  // const filter = get_filter(state);

  return (
    <g onContextMenu={onContextMenu}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <Bunker x={x} y={y} geometry={geo} />
        </ErrorEffect>
      </BlockEffect>

      <ObjectContextMenu
        model={ctrl.model}
        top={points.y}
        left={points.x}
        active={clicked}
      ></ObjectContextMenu>
    </g>
  );
}
