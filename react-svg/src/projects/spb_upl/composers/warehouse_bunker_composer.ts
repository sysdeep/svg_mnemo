import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseBunkerCtrl from "../nui/warehouse_bunker/WarehouseBunkerCtrl";
import bunker_vibro_tray_composer from "./bunker_vibro_tray_composer";

export default function warehouse_bunker_composer(
  node: ModelInterface
): WarehouseBunkerCtrl {
  let gates_node = node.must_node("gates");

  const vibro_trays = gates_node.get_childrens().map((vnode) => {
    return bunker_vibro_tray_composer(vnode);
  });

  return new WarehouseBunkerCtrl(node, vibro_trays);
}
