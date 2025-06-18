import { AbstractArrayModelProtoName } from "../../../../core/models/AbstractArrayModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type WarehouseAreaState = {
  is_block: boolean;
};

export default class WarehouseAreaProto extends BaseCompose<WarehouseAreaState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false });
  }

  protected expected_models(): string[] {
    return [AbstractArrayModelProtoName];
  }
}
