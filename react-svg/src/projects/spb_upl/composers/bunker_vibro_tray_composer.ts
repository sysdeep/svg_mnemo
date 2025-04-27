import ModelInterface from "../../../core/models/ModelInterface";
import BunkerVibroTrayCtrl from "../nui/bunker_vibro_tray/BunkerVibroTrayCtrl";

export default function bunker_vibro_tray_composer(
  node: ModelInterface
): BunkerVibroTrayCtrl {
  return new BunkerVibroTrayCtrl(node);
}
