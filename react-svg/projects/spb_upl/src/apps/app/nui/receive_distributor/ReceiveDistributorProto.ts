import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import { NwayMotorizedDustributionHopperProtoName, Attrs } from "@src/core/models/NwayMotorizedDustributionHopper";

export type ReceiveDistributorState = {
  is_block: boolean;
  is_ready: boolean;
  is_error: boolean;
};

export default class ReceiveDistributorProto extends BaseCompose<ReceiveDistributorState> {
  constructor(model: ModelInterface) {
    super(model, { is_block: false, is_ready: false, is_error: false });

    this.append_handlers([
      [Attrs.block, (st: ReceiveDistributorState, v: number) => ({ ...st, is_block: v > 0 })],
      [Attrs.ready, (st: ReceiveDistributorState, v: number) => ({ ...st, is_ready: v > 0 })],
      [Attrs.error_code, (st: ReceiveDistributorState, v: number) => ({ ...st, is_error: v > 0 })],
    ]);
  }

  protected expected_models(): string[] {
    return [NwayMotorizedDustributionHopperProtoName];
  }
}
