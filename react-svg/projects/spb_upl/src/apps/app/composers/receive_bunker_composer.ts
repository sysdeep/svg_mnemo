import ModelInterface from "../../../core/models/ModelInterface";
import ReceiveBunkerCtrl from "../nui/receive_bunker/ReceiveBunkerCtrl";

export default function receive_bunker_composer(node: ModelInterface): ReceiveBunkerCtrl {
  // TODO: other

  return new ReceiveBunkerCtrl(node);
}
