import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";
import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import useCtrlState from "../../../../core/nui/components/useCtrlState";
import VibroTray from "../../../../core/views/vibro_tray/vibro_tray";
import BunkerVibroTrayCtrl from "./BunkerVibroTrayCtrl";

type Props = {
  x: number;
  y: number;
  ctrl: BunkerVibroTrayCtrl;
};

export default function BunkerVibroTrayVM({ x, y, ctrl }: Props) {
  const state = useCtrlState(ctrl);

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <VibroTray x={x} y={y} />;
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
