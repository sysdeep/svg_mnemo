import ModelInterface from "../../../core/models/ModelInterface";
import BellCtrl from "../nui/bell/BellCtrl";

export default function bell_composer(node: ModelInterface): BellCtrl {
  return new BellCtrl(node);
}
