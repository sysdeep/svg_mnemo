import BunkerVibroTrayCtrl from "./BunkerVibroTrayCtrl";
import BunkerVibroTrayVM from "./BunkerVibroTrayVM";

type Props = {
  x: number;
  y: number;
  ctrl: BunkerVibroTrayCtrl;
};

export default function BunkerVibroTray({ x, y, ctrl }: Props) {
  return <BunkerVibroTrayVM x={x} y={y} ctrl={ctrl} />;
}
