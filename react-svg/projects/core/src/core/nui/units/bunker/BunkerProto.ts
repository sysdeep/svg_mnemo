import { BunkerModelProtoName, Attrs } from "../../../../core/models/BunkerModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type BunkerState = {
  is_block: boolean;
  is_error: boolean;
  is_mnemo_name: boolean;
  mnemo_name: string;
};

export default class BunkerProto extends BaseCompose<BunkerState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, is_mnemo_name: true, mnemo_name: "---" });

    this.append_handlers([
      [Attrs.block, (st: BunkerState, v: number) => ({ ...st, is_block: v > 0 })],
      [Attrs.error_code, (st: BunkerState, v: number) => ({ ...st, is_error: v > 0 })],
      [Attrs.using_mnemo_name, (st: BunkerState, v: number) => ({ ...st, is_mnemo_name: v > 0 })],
      [Attrs.mnemo_name, (st: BunkerState, v: string) => ({ ...st, mnemo_name: v })],
    ]);
  }

  protected expected_models(): string[] {
    return [BunkerModelProtoName];
  }
}
