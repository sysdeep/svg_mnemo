import ModelInterface from "../../../../core/models/ModelInterface";
import WarehouseBunkerCtrl from "../warehouse_bunker/WarehouseBunkerCtrl";
import WarehouseBunkersAreaProto from "./WarehouseBunkersAreaProto";

export type WarehouseBunkersAreaState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseBunkersAreaCtrl extends WarehouseBunkersAreaProto {
  bunkers: WarehouseBunkerCtrl[];
  constructor(model: ModelInterface, bunkers: WarehouseBunkerCtrl[]) {
    super(model);

    this.bunkers = bunkers;
  }
}
