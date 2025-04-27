import BaseCompose from "../../../../core/nui/BaseCompose";
import DSensorCompose from "../../../../units/dsensor/DSensorCompose";

export type MotorState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
};

export default class TransporterMotorCompose extends BaseCompose<MotorState> {
  sensors: DSensorCompose[];
  constructor() {
    super({ is_block: false, is_error: false, logic: 0 });

    this.sensors = [new DSensorCompose(), new DSensorCompose()];
  }
}
