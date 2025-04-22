import BaseCompose from "../../core/nui/BaseCompose";
import DSensorCompose from "../dsensor/DSensorCompose";

export type MainSupplyState = {
  is_block: boolean;
  is_error: boolean;
};

export default class MainSupplyCompose extends BaseCompose<MainSupplyState> {
  sensors: DSensorCompose[];
  emergency_sensor: DSensorCompose;

  constructor() {
    super({ is_block: false, is_error: false });

    this.sensors = [
      new DSensorCompose(),
      new DSensorCompose(),
      new DSensorCompose(),
    ];
    this.emergency_sensor = new DSensorCompose();
  }
}
