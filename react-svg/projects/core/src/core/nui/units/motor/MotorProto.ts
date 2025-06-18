import {
  GenericMotorModelProtoName,
  Attrs,
} from "../../../../core/models/GenericMotorModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type MotorState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
};

export default class MotorProto extends BaseCompose<MotorState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_error: false, logic: 0 });

    // define attrs -----------------------------------------------------------
    this.append_handlers([
      [
        Attrs.block,
        (state: MotorState, v: any) => ({ ...state, is_block: v > 0 }),
      ],
      [
        Attrs.error_code,
        (state: MotorState, v: number) => ({ ...state, is_error: v > 0 }),
      ],
      [Attrs.logic, (state: MotorState, v: number) => ({ ...state, logic: v })],
    ]);
  }

  protected expected_models(): string[] {
    return [GenericMotorModelProtoName];
  }
}
