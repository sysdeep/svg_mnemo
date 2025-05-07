import Motor from "../../../../views/motor/Motor";
import TransporterMotorCompose from "./TransporterMotorCompose";
import DSensorNormalView from "../../../../units/dsensor/DSensorNormalView";
import useCtrlState from "../components/useCtrlState";
import ObjectContextMenu from "../components/ObjectContextMenu";
import useContextMenu from "../../../../core/components/context_menu/useContextMenu";

export type Props = {
  x: number;
  y: number;
  ctrl: TransporterMotorCompose;
};

export default function TransporterMotor({ x, y, ctrl }: Props) {
  const sensors_view = ctrl.sensors.map((sc, i) => {
    const sx = x + i * 14;
    const sy = y - 10;
    return <DSensorNormalView x={sx} y={sy} ctrl={sc} key={i} size={8} />;
  });

  return (
    <g>
      {/* self */}
      <TransporterMotorVM x={x} y={y} ctrl={ctrl} />

      {sensors_view}
    </g>
  );
}

function TransporterMotorVM({ x, y, ctrl }: Props) {
  const state = useCtrlState(ctrl);
  const { clicked, points, onContextMenu } = useContextMenu();

  return (
    <g onContextMenu={onContextMenu}>
      <Motor x={x} y={y} is_active={state.logic > 0} />
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
