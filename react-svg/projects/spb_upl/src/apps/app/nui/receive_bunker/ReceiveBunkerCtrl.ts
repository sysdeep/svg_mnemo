import BunkerProto from "@src/core/nui/units/bunker/BunkerProto";
import ModelInterface from "../../../../core/models/ModelInterface";
import { BunkerStorageCtrl } from "../bunker_storage/BunkerStorageCtrl";
import DSensorProto from "@src/core/nui/units/dsensor/DSensorProto";

export default class ReceiveBunkerCtrl extends BunkerProto {
  storage: BunkerStorageCtrl;
  level_meters: DSensorProto[];

  constructor(model: ModelInterface, storage: BunkerStorageCtrl, level_meters: DSensorProto[]) {
    super(model);
    this.storage = storage;
    this.level_meters = level_meters;
  }
}
