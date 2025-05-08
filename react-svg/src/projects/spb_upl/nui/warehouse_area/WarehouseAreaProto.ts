import { AbstractArrayModelProtoName } from "../../../../core/models/AbstractArrayModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type WarehouseAreaState = {
  // is_block: boolean;
  // is_error: boolean;
  //   logic: number;
};

export default class WarehouseAreaProto extends BaseCompose<WarehouseAreaState> {
  constructor(model: ModelInterface) {
    super(model, {});
  }

  protected expected_models(): string[] {
    return [AbstractArrayModelProtoName];
  }
}
