import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import { FreqConvertor_ELHART_EMDProtoName } from "@src/core/models/FreqConvertor_ELHART_EMD";

export type FreqConvState = {
  is_block: boolean;
  logic: number;
  is_error: boolean;
};

export default class FreqConvProto extends BaseCompose<FreqConvState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, logic: 0, is_error: false });

    // TODO
    // this.append_handlers([
    //   [Attrs.block, (st: FreqConvState, v: number) => ({ ...st, is_block: v > 0 })],
    //   [Attrs.logic, (st: FreqConvState, v: number) => ({ ...st, logic: v })],
    //   [Attrs.error_code, (st: FreqConvState, v: number) => ({ ...st, is_error: v > 0 })],
    // ]);
  }

  protected expected_models(): string[] {
    return [FreqConvertor_ELHART_EMDProtoName];
  }
}
