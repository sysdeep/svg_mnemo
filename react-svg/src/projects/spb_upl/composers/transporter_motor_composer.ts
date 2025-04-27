import ModelInterface from "../../../core/models/ModelInterface";
import TransporterMotorCompose from "../nui/transporter_motor/TransporterMotorCompose";
import dsensor_composer from "./dsensor_composer";

export default function transporter_motor_composer(
  node: ModelInterface
): TransporterMotorCompose {
  const sensors = [...Array(3)].map((_) => {
    return dsensor_composer(node);
  });
  return new TransporterMotorCompose(node, sensors);
}
