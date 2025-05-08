import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseTransporterCompose from "../nui/warehouse_transporter/WarehouseTransporterCtrl";
import transporter_motor_composer from "./transporter_motor_composer";

export default function warehouse_transporter_composer(
  node: ModelInterface
): WarehouseTransporterCompose {
  // TODO: get motor
  const motor = transporter_motor_composer(node.must_node("motor"));
  return new WarehouseTransporterCompose(node, motor);
}
