import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import TransporterMotorCompose from "../transporter_motor/TransporterMotorCompose";
import { Attrs } from "../../../../core/models/BeltTransporterModel";

export type WarehouseTransporterState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
};

export default class WarehouseTransporterCompose extends BaseCompose<WarehouseTransporterState> {
  motor: TransporterMotorCompose;

  constructor(model: ModelInterface, motor: TransporterMotorCompose) {
    super(model, { is_block: false, is_error: false, logic: 0 });

    this.motor = motor;

    this.append_handler(
      Attrs.block,
      (state: WarehouseTransporterState, v: any) => ({
        ...state,
        is_block: v > 0,
      })
    );

    this.append_handler(
      Attrs.error_code,
      (state: WarehouseTransporterState, v: number) => ({
        ...state,
        is_error: v > 0,
      })
    );

    // this.append_handler(Attrs.block, (v: any) =>
    //   this.set_state({ ...this.value, is_block: v > 0 })
    // );

    // this.append_handler(Attrs.error_code, (v: number) =>
    //   this.set_state({ ...this.value, is_error: v > 0 })
    // );

    this.connect_to_model();

    // // TODO: упростить
    // this.model.connect_changed((attr_id: number) => {
    //   console.log(`changed: ${attr_id}`);
    //   if (attr_id == Attrs.block) {
    //     this.set_state({
    //       ...this.value,
    //       is_block: this.model.get_attr_value(Attrs.block) > 0,
    //     });
    //   }
    // });
  }
}
