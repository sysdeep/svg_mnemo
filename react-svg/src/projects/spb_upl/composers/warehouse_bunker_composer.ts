import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseBunkerCtrl from "../nui/warehouse_bunker/WarehouseBunkerCtrl";
import bunker_vibro_tray_composer from "./bunker_vibro_tray_composer";
import dsensor_composer from "./dsensor_composer";

export default function warehouse_bunker_composer(node: ModelInterface): WarehouseBunkerCtrl {
  const gates_node = node.must_node("gates");

  const vibro_trays = gates_node.get_childrens().map((vnode) => {
    return bunker_vibro_tray_composer(vnode);
  });

  const auto_mode_sensor_node = node.get_node("Automode");
  const auto_mode_sensor = auto_mode_sensor_node ? dsensor_composer(auto_mode_sensor_node) : null;

  const ready_sensor_node = node.get_node("ReadySensor");
  const ready_sensor = ready_sensor_node ? dsensor_composer(ready_sensor_node) : null;

  return new WarehouseBunkerCtrl(node, vibro_trays, auto_mode_sensor, ready_sensor);
}
