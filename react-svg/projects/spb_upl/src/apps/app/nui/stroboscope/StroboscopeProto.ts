import { StroboscopeProtoName, Attrs } from "@src/core/models/Stroboscope";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type StroboscopeState = {
  is_block: boolean;
  logic: number;
  is_error: boolean;
};

export default class StroboscopeProto extends BaseCompose<StroboscopeState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, logic: 0, is_error: false });

    this.append_handlers([
      [Attrs.block, (st: StroboscopeState, v: number) => ({ ...st, is_block: v > 0 })],
      [Attrs.logic, (st: StroboscopeState, v: number) => ({ ...st, logic: v })],
      [Attrs.error_code, (st: StroboscopeState, v: number) => ({ ...st, is_error: v > 0 })],
    ]);
  }

  protected expected_models(): string[] {
    return [StroboscopeProtoName];
  }
}
