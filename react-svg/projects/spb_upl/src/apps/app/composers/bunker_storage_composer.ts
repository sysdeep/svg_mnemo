import ModelInterface from "../../../core/models/ModelInterface";
import { BunkerStorageCtrl } from "../nui/bunker_storage/BunkerStorageCtrl";

export default function bunker_storage_composer(node: ModelInterface): BunkerStorageCtrl {
  return new BunkerStorageCtrl(node);
}
