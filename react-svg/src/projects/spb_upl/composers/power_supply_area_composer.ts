import ModelInterface from "../../../core/models/ModelInterface";
import PowerSupplyAreaCtrl from "../nui/power_supply_area/PowerSupplyAreaCtrl";
import power_supply_sensor_composer from "./power_supply_sensor_composer";

export default function power_supply_area_composer(node: ModelInterface): PowerSupplyAreaCtrl {
  const power_controllers = node.get_childrens().map((child_node) => power_supply_sensor_composer(child_node));

  return new PowerSupplyAreaCtrl(node, power_controllers);
}
