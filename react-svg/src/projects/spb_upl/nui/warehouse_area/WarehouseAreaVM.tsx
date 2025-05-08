import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";
import WarehouseAreaProto from "./WarehouseAreaProto";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseAreaProto;
};

export default function WarehouseAreaVM({ x, y, ctrl }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();

  return (
    <g onContextMenu={onContextMenu}>
      <rect
        x={x}
        y={y}
        width={420}
        height={780}
        rx={5}
        fillOpacity={0.2}
        onContextMenu={onContextMenu}
      >
        <title>{ctrl.model.sname}</title>
        <ObjectContextMenu
          model={ctrl.model}
          top={points.y}
          left={points.x}
          active={clicked}
        ></ObjectContextMenu>
      </rect>
    </g>
  );
}
