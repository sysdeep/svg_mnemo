import ModelInterface from "../../../core/models/ModelInterface";
import { PowerSupplySensorCtrl } from "../nui/power_supply_sensor/PowerSupplySensorCtrl";

export default function power_supply_sensor_composer(node: ModelInterface): PowerSupplySensorCtrl {
  return new PowerSupplySensorCtrl(node);
}
