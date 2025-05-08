import ModelInterface from "../../../../core/models/ModelInterface";
import BunkerVibroTrayCtrl from "../bunker_vibro_tray/BunkerVibroTrayCtrl";
import WarehouseBunkerProto from "./WarehouseBunkerProto";

export type WarehouseBunkerState = {
  is_block: boolean;
  is_error: boolean;
  //   logic: number;
};

export default class WarehouseBunkerCtrl extends WarehouseBunkerProto {
  vibro_trays: BunkerVibroTrayCtrl[];
  constructor(model: ModelInterface, vibro_trays: BunkerVibroTrayCtrl[]) {
    super(model);
    this.vibro_trays = vibro_trays;
  }
}
