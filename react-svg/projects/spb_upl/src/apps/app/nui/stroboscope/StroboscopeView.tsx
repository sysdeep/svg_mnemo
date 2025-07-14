import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import StroboscopeProto from "./StroboscopeProto";

type Props = {
  x: number;
  y: number;
  ctrl: StroboscopeProto;
};

export default function StroboscopeView({ x, y, ctrl }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect x={x} y={y} width={16} height={16} rx={5} fillOpacity={0.8} color="red"></rect>

      <title>{ctrl.model.sname}</title>
    </ObjectContextMenuWrapper>
  );
}
