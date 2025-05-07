import { AbstractArrayModelProtoName } from "../../../../core/models/AbstractArrayModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import WarehouseBunkerCtrl from "../warehouse_bunker/WarehouseBunkerCtrl";

export type WarehouseBunkersAreaState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseBunkersAreaCompose extends BaseCompose<WarehouseBunkersAreaState> {
  bunkers: WarehouseBunkerCtrl[];
  constructor(model: ModelInterface, bunkers: WarehouseBunkerCtrl[]) {
    super(model, {});

    this.bunkers = bunkers;
  }

  expected_models(): string[] {
    return [AbstractArrayModelProtoName];
  }
}
