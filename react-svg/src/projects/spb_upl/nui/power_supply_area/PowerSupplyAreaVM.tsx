import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import PowerSupplyAreaProto from "./PowerSupplyAreaProto";

type Props = {
  x: number;
  y: number;
  max_width: number;
  max_heigh: number;
  ctrl: PowerSupplyAreaProto;
};

export default function PowerSupplyAreaVM({ x, y, ctrl, max_width, max_heigh }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect x={x} y={y} width={max_width} height={max_heigh} rx={5} fillOpacity={0.2} fill="orange">
        <title>{ctrl.model.sname}</title>
      </rect>
    </ObjectContextMenuWrapper>
  );
}
