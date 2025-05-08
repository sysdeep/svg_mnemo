import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import ObjectContextMenu from "../../../../core/nui/components/ObjectContextMenu";
import WarehouseLineProto from "./WarehouseLineProto";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseLineProto;
};

export default function WarehouseLineVM({ x, y, ctrl }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();

  return (
    <g onContextMenu={onContextMenu}>
      <rect
        x={x}
        y={y}
        width={420}
        height={240}
        // stroke="red"
        // strokeWidth={1}
        fillOpacity={0.1}
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
