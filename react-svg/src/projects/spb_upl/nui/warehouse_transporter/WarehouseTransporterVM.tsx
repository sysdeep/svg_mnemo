import { ReactNode } from "react";
import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import { Green } from "../../../../core/nui/lib/palette";
import { Belt } from "../../../../core/views/belt";
import WarehouseTransporterProto, {
  WarehouseTransporterState,
} from "./WarehouseTransporterProto";
import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseTransporterProto;
  menu_items?: ReactNode;
};

export default function WarehouseTransporterVM({
  x,
  y,
  ctrl,
  menu_items,
}: Props) {
  const state = useCtrlState<WarehouseTransporterState>(ctrl);

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
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

      <title>{ctrl.model.sname}</title>
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
    </ObjectContextMenuWrapper>
  );
}
