import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import TransporterMotorCompose from "../transporter_motor/TransporterMotorCompose";
import {
  Attrs,
  BeltTransporterModelProtoName,
} from "../../../../core/models/BeltTransporterModel";

export type WarehouseTransporterState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
  dir: number;
  is_reverse: boolean;
};

// TODO: очень похоже на схему с proto -> ctrl в python варианте
export default class WarehouseTransporterCompose extends BaseCompose<WarehouseTransporterState> {
  motor: TransporterMotorCompose;

  constructor(model: ModelInterface, motor: TransporterMotorCompose) {
    super(model, {
      is_block: false,
      is_error: false,
      logic: 0,
      dir: 0,
      is_reverse: false,
    });

    // composition ----------------------------------------
    this.motor = motor;

    // define handlers ------------------------------------
    this.append_handlers([
      [
        Attrs.logic,
        (state: WarehouseTransporterState, v: number) => ({
          ...state,
          logic: v,
        }),
      ],
      [
        Attrs.block,
        (state: WarehouseTransporterState, v: any) => ({
          ...state,
          is_block: v > 0,
        }),
      ],
      [
        Attrs.error_code,
        (state: WarehouseTransporterState, v: number) => ({
          ...state,
          is_error: v > 0,
        }),
      ],
    ]);
  }

  protected expected_models(): string[] {
    return [BeltTransporterModelProtoName];
  }
}
