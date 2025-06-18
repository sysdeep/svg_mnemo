import ModelInterface from "../../../../core/models/ModelInterface";
import { PowerSupplyControllerCtrl } from "../power_supply_contoller/PowerSupplyControllerCtrl";
import PowerSupplyAreaProto from "./PowerSupplyAreaProto";

export default class PowerSupplyAreaCtrl extends PowerSupplyAreaProto {
  controllers: PowerSupplyControllerCtrl[];

  constructor(model: ModelInterface, controllers: PowerSupplyControllerCtrl[]) {
    super(model);
    this.controllers = controllers;
  }
}
