import { MainSupplyModelProtoName, Attrs } from "../../../../core/models/MainSupplyModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type MainSupplyState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
};

export default class MainSupplyProto extends BaseCompose<MainSupplyState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, logic: 0 });

    // define attrs -----------------------------------------------------------
    this.append_handlers([
      // [Attrs.block, (state: MainSupplyState, v: any) => ({ ...state, is_block: v > 0 })],
      // [Attrs.error_code, (state: MainSupplyState, v: number) => ({ ...state, is_error: v > 0 })],
      // [Attrs.logic, (state: MainSupplyState, v: number) => ({ ...state, logic: v })],
    ]);
  }

  protected expected_models(): string[] {
    return [MainSupplyModelProtoName];
  }
}
