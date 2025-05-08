import {
  BunkerModelProtoName,
  Attrs,
} from "../../../../core/models/BunkerModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type WarehouseBunkerState = {
  is_block: boolean;
  is_error: boolean;
  //   logic: number;
};

export default class WarehouseBunkerProto extends BaseCompose<WarehouseBunkerState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false });

    this.append_handlers([
      [
        Attrs.block,
        (st: WarehouseBunkerState, v: number) => ({ ...st, is_block: v > 0 }),
      ],
      [
        Attrs.error_code,
        (st: WarehouseBunkerState, v: number) => ({ ...st, is_error: v > 0 }),
      ],
    ]);
  }

  protected expected_models(): string[] {
    return [BunkerModelProtoName];
  }
}
