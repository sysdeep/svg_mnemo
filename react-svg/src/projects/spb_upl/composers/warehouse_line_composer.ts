import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseLineCompose from "../nui/warehouse_line/WarehouseLineCompose";
import warehouse_bunkers_area_composer from "./warehouse_bunkers_area_composer";
import warehouse_transporter_composer from "./warehouse_transporter_composer";

export default function warehouse_line_composer(
  node: ModelInterface
): WarehouseLineCompose {
  const bunkers_area = warehouse_bunkers_area_composer(node);
  const transporter = warehouse_transporter_composer(node);
  return new WarehouseLineCompose(node, bunkers_area, transporter);
}
