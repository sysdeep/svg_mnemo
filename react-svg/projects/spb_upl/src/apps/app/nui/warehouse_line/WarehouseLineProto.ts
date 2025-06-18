import ModelInterface from "../../../../core/models/ModelInterface";
import { WH_LineModelProtoName } from "../../../../core/models/WH_LineModel";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type WarehouseLineState = {
  is_block: boolean;
};

export default class WarehouseLineProto extends BaseCompose<WarehouseLineState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false });
  }

  protected expected_models(): string[] {
    return [WH_LineModelProtoName];
  }
}
