import { SensorController, Attrs as AttrsBase } from "./SensorController";

export const Attrs = {
  ...AttrsBase,
  error_reaction: 6, // int,      access: 5 --d-r,  name: Предупреждение при плохом давлении
  stop_reaction: 7, // int,      access: 5 --d-r,  name: Стоп при плохом давлении
};

export const PowerSupplyControllerProtoName = "PowerSupplyController";

export class PowerSupplyController extends SensorController {
  proto_name: string = PowerSupplyControllerProtoName;
}
