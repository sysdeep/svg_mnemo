import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseAreaCtrl from "../nui/warehouse_area/WarehouseAreaCtrl";
import warehouse_line_composer from "./warehouse_line_composer";

export default function warehouse_area_composer(
  node: ModelInterface
): WarehouseAreaCtrl {
  // TODO: real nodes
  const lines = node
    .get_childrens()
    .map((line_node) => warehouse_line_composer(line_node));

  return new WarehouseAreaCtrl(node, lines);
}
