import ModelInterface from "../../../../core/models/ModelInterface";
import DSensorProto from "../../../../core/nui/units/dsensor/DSensorProto";
import MainSupplyProto from "../../../../core/nui/units/main_supply/MainSupplyProto";

export default class MainSupplyCtrl extends MainSupplyProto {
  sensors: DSensorProto[];
  emergency_sensor: DSensorProto;

  constructor(model: ModelInterface, sensors: DSensorProto[], emergency_sensor: DSensorProto) {
    super(model);

    this.sensors = sensors;
    this.emergency_sensor = emergency_sensor;
  }
}
