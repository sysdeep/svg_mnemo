import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import MotorProto from "./MotorProto";
import useCtrlState from "../../components/useCtrlState";
import BlockEffect from "../../components/BlockEffect";
import ErrorEffect from "../../components/ErrorEffect";
import ObjectContextMenu from "../../components/ObjectContextMenu";
import Motor from "../../../views/motor/Motor";

export type Props = {
  x: number;
  y: number;
  ctrl: MotorProto;
};

export default function MotorVM({ x, y, ctrl }: Props) {
  const state = useCtrlState(ctrl);
  const { clicked, points, onContextMenu } = useContextMenu();

  return (
    <g onContextMenu={onContextMenu}>
      <title>{ctrl.model.sname}</title>

      <BlockEffect st={state.is_block}>
        <ErrorEffect st={state.is_error}>
          <Motor x={x} y={y} is_active={state.logic > 0} />
        </ErrorEffect>
      </BlockEffect>

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
