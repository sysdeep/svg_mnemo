import ModelInterface from "../../../../core/models/ModelInterface";
import DSensorProto from "../../../../core/nui/units/dsensor/DSensorProto";
import MotorProto from "../../../../core/nui/units/motor/MotorProto";

export default class TransporterMotorCompose extends MotorProto {
  sensors: DSensorProto[];

  constructor(model: ModelInterface, sensors: DSensorProto[]) {
    super(model);

    this.sensors = sensors;
  }
}
