import { AbstractModelProtoName } from "@src/core/models/AbstractModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type ReceiveAreaState = {
  is_block: boolean;
};

export default class ReceiveAreaProto extends BaseCompose<ReceiveAreaState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false });
  }

  protected expected_models(): string[] {
    return [AbstractModelProtoName];
  }
}
