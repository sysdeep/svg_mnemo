import { DSensorModelProtoName, Attrs } from "../../core/models/DSensorModel";
import ModelInterface from "../../core/models/ModelInterface";
import BaseCompose from "../../core/nui/BaseCompose";

export type DSensorState = {
  is_error: boolean;
  is_state: boolean;
  is_block: boolean;
};

export default class DSensorCompose extends BaseCompose<DSensorState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, is_state: false });

    // define handlers --------------------------------------------------------
    this.append_handlers([
      [
        Attrs.state,
        (state: DSensorState, v: number) => ({ ...state, is_state: v > 0 }),
      ],
    ]);
  }

  protected expected_models(): string[] {
    return [DSensorModelProtoName];
  }
}
