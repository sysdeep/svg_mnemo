import Bunker from "@src/core/views/bunker/bunker";
import ObjectContextMenuWrapper from "../../../../core/nui/components/ObjectContextMenuWrapper";
import ReceiveDistributorProto from "./ReceiveDistributorProto";
import BunkerGeometry from "@src/core/views/bunker/bunker_geometry";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  ctrl: ReceiveDistributorProto;
};

export default function ReceiveDistributorView({ x, y, width, height, ctrl }: Props) {
  const geo: BunkerGeometry = {
    max_width: width,
    conus_height: 20,
    out_width: 50,
    top_height: 20,
  };

  return (
    <ObjectContextMenuWrapper model={ctrl.model}>
      {/* <rect x={x} y={y} width={width} height={height} rx={5} fillOpacity={0.2} color="red"></rect> */}

      <Bunker x={x} y={y} geometry={geo} />
      <title>{ctrl.model.sname}</title>
    </ObjectContextMenuWrapper>
  );
}
