import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import Bunker from "../../../../core/views/bunker/bunker";
import BunkerGeometry from "../../../../core/views/bunker/bunker_geometry";
import WarehouseBunkerProto from "./WarehouseBunkerProto";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseBunkerProto;
};

export const WarehouseBunkerRect = {
  width: 3 * 28 + 2 * 4,
  height: 160,
};

export default function WarehouseBunkerVM({ x, y, ctrl }: Props) {
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
