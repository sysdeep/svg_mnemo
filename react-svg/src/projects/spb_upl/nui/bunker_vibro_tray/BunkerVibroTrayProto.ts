import ModelInterface from "../../../../core/models/ModelInterface";
import { SimpleVibroTrayModelProtoName, Attrs } from "../../../../core/models/SimpleVibroTrayModel";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type BunkerVibroTrayState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
};

export default class BunkerVibroTrayProto extends BaseCompose<BunkerVibroTrayState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, logic: 0 });

    this.append_handlers([
      [Attrs.block, (st: BunkerVibroTrayState, v: number) => ({ ...st, is_block: v > 0 })],
      [Attrs.error_code, (st: BunkerVibroTrayState, v: number) => ({ ...st, is_error: v > 0 })],
      [Attrs.logic, (st: BunkerVibroTrayState, v: number) => ({ ...st, logic: v })],
    ]);
  }

  protected expected_models(): string[] {
    return [SimpleVibroTrayModelProtoName];
  }

  // actions ------------------------------------------------------------------
  start() {
    // TODO: to model
    console.log("start");
    this.model.set_attr_value(Attrs.logic, 3);
  }

  stop() {
    // TODO: to model
    console.log("stop");
    this.model.set_attr_value(Attrs.logic, 0);
  }
}
