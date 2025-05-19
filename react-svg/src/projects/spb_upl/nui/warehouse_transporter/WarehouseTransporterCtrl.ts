import ModelInterface from "../../../../core/models/ModelInterface";
import BeltProto from "../../../../core/nui/units/belt/BeltProto";
import TransporterMotorCtrl from "../transporter_motor/TransporterMotorCtrl";

export default class WarehouseTransporterCtrl extends BeltProto {
  motor: TransporterMotorCtrl;

  constructor(model: ModelInterface, motor: TransporterMotorCtrl) {
    super(model);

    // composition ----------------------------------------
    this.motor = motor;
  }
}
