import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import { Yellow } from "../../../../core/nui/lib/palette";
import Bunker from "../../../../core/views/bunker/bunker";
import BunkerGeometry from "../../../../core/views/bunker/bunker_geometry";
import BunkerProto from "./BunkerProto";

type Props = {
  x: number;
  y: number;
  ctrl: BunkerProto;
  geometry: BunkerGeometry;
};

// export const WarehouseBunkerRect = {
//   width: 3 * 28 + 2 * 4,
//   height: 190,
// };

export default function BunkerView({ x, y, ctrl, geometry }: Props) {
  const state = useCtrlState(ctrl);

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <Bunker x={x} y={y} geometry={geometry} />
          {state.is_mnemo_name && (
            <text
              x={x + geometry.max_width - 4}
              y={y + 16}
              fill={Yellow.p200}
              textAnchor="end"
              // fontFamily="Ubuntu"
            >
              {state.mnemo_name}
            </text>
          )}
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
