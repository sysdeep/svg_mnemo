import BaseCompose from "../../../../core/nui/BaseCompose";
import TransporterMotorCompose from "../transporter_motor/TransporterMotorCompose";

export type WarehouseTransporterState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseTransporterCompose extends BaseCompose<WarehouseTransporterState> {
  motor: TransporterMotorCompose;
  constructor() {
    super({});

    this.motor = new TransporterMotorCompose();
  }
}
