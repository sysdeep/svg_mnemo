import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseTransporterCompose from "../nui/warehouse_transporter/WarehouseTransporterCompose";
import transporter_motor_composer from "./transporter_motor_composer";

export default function warehouse_transporter_composer(
  node: ModelInterface
): WarehouseTransporterCompose {
  const motor = transporter_motor_composer(node);
  return new WarehouseTransporterCompose(node, motor);
}
