import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import FreqConvProto from "./FreqConvProto";

type Props = {
  x: number;
  y: number;
  ctrl: FreqConvProto;
};

export default function FreqConvView({ x, y, ctrl }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect x={x} y={y} width={24} height={16} rx={5} fillOpacity={0.8} color="red"></rect>

      <title>{ctrl.model.sname}</title>
    </ObjectContextMenuWrapper>
  );
}
