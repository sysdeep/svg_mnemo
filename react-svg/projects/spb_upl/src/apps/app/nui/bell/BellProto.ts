import { BellProtoName, Attrs } from "@src/core/models/Bell";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type BellState = {
  is_block: boolean;
  is_active: boolean;
  is_error: boolean;
};

export default class BellProto extends BaseCompose<BellState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_active: false, is_error: false });

    this.append_handlers([
      [Attrs.block, (st: BellState, v: number) => ({ ...st, is_block: v > 0 })],
      [Attrs.logic, (st: BellState, v: number) => ({ ...st, is_active: v > 0 })],
      [Attrs.error_code, (st: BellState, v: number) => ({ ...st, is_error: v > 0 })],
    ]);
  }

  protected expected_models(): string[] {
    return [BellProtoName];
  }
}
