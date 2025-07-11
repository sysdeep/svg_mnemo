import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import ReceiveDistributorProto from "./ReceiveDistributorProto";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  ctrl: ReceiveDistributorProto;
};

export default function ReceiveDistributorView({ x, y, width, height, ctrl }: Props) {
  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      <rect x={x} y={y} width={width} height={height} rx={5} fillOpacity={0.2} color="red">
        <title>{ctrl.model.sname}</title>
      </rect>
    </ObjectContextMenuWrapper>
  );
}
