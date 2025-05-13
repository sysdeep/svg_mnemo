import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
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

  const on_press = () => {
    ctrl.start();
  };

  const on_release = () => {
    ctrl.stop();
  };

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <VibroTray x={x} y={y} active={state.logic > 0} on_press={on_press} on_release={on_release} />;
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
