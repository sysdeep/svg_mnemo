import BaseCompose from "../../core/nui/BaseCompose";
import MainSupplyCompose from "../main_supply/MainSupplyCompose";
import MotorCompose from "../motor/MotorCompose";

export type AppState = {};

export default class AppCompose extends BaseCompose<AppState> {
  main_supply: MainSupplyCompose;
  motor: MotorCompose;

  constructor() {
    super({});

    this.main_supply = new MainSupplyCompose();
    this.motor = new MotorCompose();
  }
}
