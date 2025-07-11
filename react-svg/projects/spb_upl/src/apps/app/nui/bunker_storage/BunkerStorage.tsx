import { BunkerStorageCtrl } from "./BunkerStorageCtrl";
import BunkerStorageView from "./BunkerStorageView";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  ctrl: BunkerStorageCtrl;
};

export default function BunkerStorage({ x, y, width, height, ctrl }: Props) {
  return <BunkerStorageView x={x} y={y} width={width} height={height} ctrl={ctrl} />;
}
