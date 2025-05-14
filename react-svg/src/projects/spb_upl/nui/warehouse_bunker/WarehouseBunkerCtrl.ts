import ModelInterface from "../../../../core/models/ModelInterface";
import DSensorProto from "../../../../core/nui/units/dsensor/DSensorProto";
import BunkerVibroTrayCtrl from "../bunker_vibro_tray/BunkerVibroTrayCtrl";
import WarehouseBunkerProto from "./WarehouseBunkerProto";

export type WarehouseBunkerState = {
  is_block: boolean;
  is_error: boolean;
  //   logic: number;
};

export default class WarehouseBunkerCtrl extends WarehouseBunkerProto {
  vibro_trays: BunkerVibroTrayCtrl[];
  auto_mode_sensor: DSensorProto | null;
  ready_sensor: DSensorProto | null;

  constructor(
    model: ModelInterface,
    vibro_trays: BunkerVibroTrayCtrl[],
    auto_mode_sensor: DSensorProto | null,
    ready_sensor: DSensorProto | null
  ) {
    super(model);
    this.vibro_trays = vibro_trays;
    this.auto_mode_sensor = auto_mode_sensor;
    this.ready_sensor = ready_sensor;
  }
}
