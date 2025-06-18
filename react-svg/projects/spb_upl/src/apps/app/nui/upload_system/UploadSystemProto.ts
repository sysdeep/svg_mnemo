import { InertUploadSystemProtoName } from "../../../../core/models/InertUploadSystem";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type UploadSystemState = {
  is_block: boolean;
};

export default class UploadSystemProto extends BaseCompose<UploadSystemState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false });
  }

  protected expected_models(): string[] {
    return [InertUploadSystemProtoName];
  }
}
