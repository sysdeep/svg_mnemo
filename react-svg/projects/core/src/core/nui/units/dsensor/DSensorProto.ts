import { DSensorModelProtoName, Attrs } from "../../../models/DSensorModel";
import ModelInterface from "../../../models/ModelInterface";
import BaseCompose from "../../BaseCompose";

export type DSensorState = {
  is_error: boolean;
  is_state: boolean;
  is_block: boolean;
  is_control: boolean; // снятие контроля
};

export default class DSensorProto extends BaseCompose<DSensorState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, is_state: false, is_control: true });

    // define handlers --------------------------------------------------------
    this.append_handlers([
      [Attrs.state, (state: DSensorState, v: number) => this.on_state(state, v)],
      [Attrs.inverted_logic, (state: DSensorState, v: number) => this.on_inverted_logic(state, v)],
      [Attrs.block, (state: DSensorState, v: number) => ({ ...state, is_block: v > 0 })],
      [Attrs.error_type, (state: DSensorState, v: number) => ({ ...state, is_error: v > 0 })],
      [Attrs.control, (state: DSensorState, v: number) => ({ ...state, is_control: v > 0 })],
    ]);
  }

  protected expected_models(): string[] {
    return [DSensorModelProtoName];
  }

  // handlers
  on_state(state: DSensorState, v: number) {
    let st = v > 0;

    if (this.model.get_attr_value(Attrs.inverted_logic) > 0) {
      st = !st;
    }
    return { ...state, is_state: st };
  }

  on_inverted_logic(state: DSensorState, v: number) {
    let st = this.model.get_attr_value(Attrs.state) > 0;

    if (v > 0) {
      st = !st;
    }
    return { ...state, is_state: st };
  }
}
