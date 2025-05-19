import { BeltTransporterModelProtoName } from "../../../core/models/BeltTransporterModel";
import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseLineCompose from "../nui/warehouse_line/WarehouseLineCompose";
import warehouse_bunkers_area_composer from "./warehouse_bunkers_area_composer";
import warehouse_transporter_composer from "./warehouse_transporter_composer";

export default function warehouse_line_composer(node: ModelInterface): WarehouseLineCompose {
  const bunkers_area = warehouse_bunkers_area_composer(node.must_node("bunkerArray"));

  const transporter_model = node.get_childrens().find((model) => model.proto_name === BeltTransporterModelProtoName);

  if (!transporter_model) {
    throw new Error(`${node.name} no children - ${BeltTransporterModelProtoName}`);
  }

  const transporter = warehouse_transporter_composer(transporter_model);
  return new WarehouseLineCompose(node, bunkers_area, transporter);
}
