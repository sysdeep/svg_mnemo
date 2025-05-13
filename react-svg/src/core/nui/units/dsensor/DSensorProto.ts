import { DSensorModelProtoName, Attrs } from "../../../models/DSensorModel";
import ModelInterface from "../../../models/ModelInterface";
import BaseCompose from "../../BaseCompose";

export type DSensorState = {
  is_error: boolean;
  is_state: boolean;
  is_block: boolean;
};

export default class DSensorProto extends BaseCompose<DSensorState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, is_state: false });

    // define handlers --------------------------------------------------------
    this.append_handlers([[Attrs.state, (state: DSensorState, v: number) => ({ ...state, is_state: v > 0 })]]);
  }

  protected expected_models(): string[] {
    return [DSensorModelProtoName];
  }
}
