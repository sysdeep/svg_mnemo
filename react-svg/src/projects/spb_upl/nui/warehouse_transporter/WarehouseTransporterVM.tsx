import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import { Green } from "../../../../core/nui/lib/palette";
import { Belt } from "../../../../core/views/belt";
import WarehouseTransporterProto, {
  WarehouseTransporterState,
} from "./WarehouseTransporterProto";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseTransporterProto;
};

export default function WarehouseTransporterVM({ x, y, ctrl }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();

  const state = useCtrlState<WarehouseTransporterState>(ctrl);

  return (
    <g onContextMenu={onContextMenu}>
      <rect
        x={x}
        y={y}
        width={520}
        height={40}
        // stroke="green"
        // strokeWidth={1}
        fillOpacity={0.1}
        fill={Green.p300}
      />

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <Belt
            x={x}
            y={y}
            logic={state.logic}
            direction={state.direction}
            chunks_count={30}
          />
        </ErrorEffect>
      </BlockEffect>
      <title>{ctrl.model.sname}</title>

      <ObjectContextMenu
        model={ctrl.model}
        top={points.y}
        left={points.x}
        active={clicked}
      >
        {/* <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
            test aaaaa
          </ContextMenuAction> */}
      </ObjectContextMenu>
    </g>
  );
}
