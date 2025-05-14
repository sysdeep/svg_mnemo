import ContextMenuAction from "../../../../core/components/context_menu/ContextMenuAction";
import BlockEffect from "../../../../core/nui/components/BlockEffect";
import ErrorEffect from "../../../../core/nui/components/ErrorEffect";
import StartIcon from "../../../../core/nui/components/icons/StartIcon";
import StopIcon from "../../../../core/nui/components/icons/StopIcon";
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

  const actions_menu = (
    <>
      <ContextMenuAction onClick={() => on_press()}>
        <StartIcon /> Start
      </ContextMenuAction>
      <ContextMenuAction onClick={() => on_release()}>
        <StopIcon /> Stop
      </ContextMenuAction>
    </>
  );

  return (
    <ObjectContextMenuWrapper model={ctrl.model} add_items={actions_menu}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <VibroTray x={x} y={y} active={state.logic > 0} on_press={on_press} on_release={on_release} />;
        </ErrorEffect>
      </BlockEffect>
    </ObjectContextMenuWrapper>
  );
}
