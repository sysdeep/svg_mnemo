import { ReactNode } from "react";
import BlockEffect from "../../components/BlockEffect";
import ErrorEffect from "../../components/ErrorEffect";
import useCtrlState from "../../components/useCtrlState";
import { Green } from "../../lib/palette";
import { Belt } from "../../../views/belt";

import ObjectContextMenuWrapper from "../../components/ObjectContextMenuWrapper";
import BeltProto, { BeltState } from "./BeltProto";

type Props = {
  x: number;
  y: number;
  ctrl: BeltProto;
  menu_items?: ReactNode;
};

export default function BeltLegacyVM({ x, y, ctrl, menu_items }: Props) {
  const state = useCtrlState<BeltState>(ctrl);

  return (
    <ObjectContextMenuWrapper model={ctrl.model} add_items={menu_items}>
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
          <Belt x={x} y={y} logic={state.logic} direction={state.direction} chunks_count={30} />
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
