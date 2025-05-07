import VibroTray from "../../../../core/views/vibro_tray/vibro_tray";
import BunkerVibroTrayCtrl from "./BunkerVibroTrayCtrl";

type Props = {
  x: number;
  y: number;
  ctrl: BunkerVibroTrayCtrl;
};

export default function BunkerVibroTray({ x, y, ctrl }: Props) {
  return <VibroTray x={x} y={y} />;
}
