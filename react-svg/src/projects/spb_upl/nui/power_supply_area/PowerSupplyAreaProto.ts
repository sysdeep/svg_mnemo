import { AbstractArrayModelProtoName } from "../../../../core/models/AbstractArrayModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type PowerSupplyAreaState = {
  is_block: boolean;
};

export default class PowerSupplyAreaProto extends BaseCompose<PowerSupplyAreaState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false });
  }

  protected expected_models(): string[] {
    return [AbstractArrayModelProtoName];
  }
}
