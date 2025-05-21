import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import { PowerSupplyControllerProtoName, Attrs } from "../../../models/PowerSupplyController";

export type PowerSupplyControllerState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
};

export class PowerSupplyControllerProto extends BaseCompose<PowerSupplyControllerState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, logic: 0 });

    // define attrs -----------------------------------------------------------
    this.append_handlers([
      [Attrs.block, (state: PowerSupplyControllerState, v: any) => ({ ...state, is_block: v > 0 })],
      [Attrs.error_code, (state: PowerSupplyControllerState, v: number) => ({ ...state, is_error: v > 0 })],
      [Attrs.logic, (state: PowerSupplyControllerState, v: number) => ({ ...state, logic: v })],
    ]);
  }

  protected expected_models(): string[] {
    return [PowerSupplyControllerProtoName];
  }
}
