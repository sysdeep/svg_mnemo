import ModelInterface from "../../../../core/models/ModelInterface";
import TransporterMotorCtrl from "../transporter_motor/TransporterMotorCtrl";
import WarehouseTransporterProto from "./WarehouseTransporterProto";

export type WarehouseTransporterState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
  dir: number;
  is_reverse: boolean;
};

export default class WarehouseTransporterCtrl extends WarehouseTransporterProto {
  motor: TransporterMotorCtrl;

  constructor(model: ModelInterface, motor: TransporterMotorCtrl) {
    super(model);

    // composition ----------------------------------------
    this.motor = motor;
  }
}
