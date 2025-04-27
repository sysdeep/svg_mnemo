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
  }

  public on_click() {
    this.set_state({ ...this.value, is_state: !this.value.is_state });
  }
}
