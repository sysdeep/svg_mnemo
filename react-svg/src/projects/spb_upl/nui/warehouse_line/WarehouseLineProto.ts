import ModelInterface from "../../../../core/models/ModelInterface";
import { WH_LineModelProtoName } from "../../../../core/models/WH_LineModel";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type WarehouseLineState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseLineProto extends BaseCompose<WarehouseLineState> {
  constructor(model: ModelInterface) {
    super(model, {});
  }

  protected expected_models(): string[] {
    return [WH_LineModelProtoName];
  }
}
