import { FBunkerStorageCommonProtoName } from "@src/core/models/FBunkerStorageCommon";
import ModelInterface from "../../../core/models/ModelInterface";
import ReceiveBunkerCtrl from "../nui/receive_bunker/ReceiveBunkerCtrl";
import bunker_storage_composer from "./bunker_storage_composer";
import dsensor_composer from "./dsensor_composer";

export default function receive_bunker_composer(node: ModelInterface): ReceiveBunkerCtrl {
  // TODO: other

  // TODO: links!!!
  // storage
  let use_links = true;
  const storage_node = node.get_childrens(use_links).find((m) => m.proto_name === FBunkerStorageCommonProtoName);
  if (!storage_node) {
    throw new Error("no storage for: " + node.name);
  }
  const storage = bunker_storage_composer(storage_node);

  // level meters
  const level_meters = node
    .must_node("levelMeters")
    .get_childrens(false)
    .map((m) => dsensor_composer(m));

  return new ReceiveBunkerCtrl(node, storage, level_meters);
}
