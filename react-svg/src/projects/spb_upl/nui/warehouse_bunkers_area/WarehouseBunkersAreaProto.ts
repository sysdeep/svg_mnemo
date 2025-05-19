import { AbstractArrayModelProtoName } from "../../../../core/models/AbstractArrayModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type WarehouseBunkersAreaState = {
  is_block: boolean;
};

export default class WarehouseBunkersAreaProto extends BaseCompose<WarehouseBunkersAreaState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false });
  }

  expected_models(): string[] {
    return [AbstractArrayModelProtoName];
  }
}
