import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import BellProto from "./BellProto";

type Props = {
  x: number;
  y: number;
  ctrl: BellProto;
};

export default function BellView({ x, y, ctrl }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect x={x} y={y} width={24} height={24} rx={5} fillOpacity={0.8} color="red"></rect>

      <title>{ctrl.model.sname}</title>
    </ObjectContextMenuWrapper>
  );
}
