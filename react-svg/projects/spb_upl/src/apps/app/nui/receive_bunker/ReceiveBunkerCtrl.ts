import BunkerProto from "@src/core/nui/units/bunker/BunkerProto";
import ModelInterface from "../../../../core/models/ModelInterface";

export default class ReceiveBunkerCtrl extends BunkerProto {
  // vibro_trays: BunkerVibroTrayCtrl[];
  // auto_mode_sensor: DSensorProto | null;
  // ready_sensor: DSensorProto | null;

  constructor(
    model: ModelInterface
    // vibro_trays: BunkerVibroTrayCtrl[],
    // auto_mode_sensor: DSensorProto | null,
    // ready_sensor: DSensorProto | null
  ) {
    super(model);
    // this.vibro_trays = vibro_trays;
    // this.auto_mode_sensor = auto_mode_sensor;
    // this.ready_sensor = ready_sensor;
  }
}
