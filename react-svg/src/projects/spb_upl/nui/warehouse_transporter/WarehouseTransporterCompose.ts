import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import TransporterMotorCompose from "../transporter_motor/TransporterMotorCompose";

export type WarehouseTransporterState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseTransporterCompose extends BaseCompose<WarehouseTransporterState> {
  motor: TransporterMotorCompose;
  constructor(model: ModelInterface, motor: TransporterMotorCompose) {
    super(model, {});

    this.motor = motor;
  }
}
