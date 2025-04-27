import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseAreaCompose from "../nui/warehouse_area/WarehouseAreaCompose";
import warehouse_line_composer from "./warehouse_line_composer";

export default function warehouse_area_composer(
  node: ModelInterface
): WarehouseAreaCompose {
  // TODO: real nodes
  const lines = [...Array(3)].map((_) => warehouse_line_composer(node));

  return new WarehouseAreaCompose(node, lines);
}
