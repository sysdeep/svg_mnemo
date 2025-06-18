import { DSensorModelProtoName } from "../../../core/models/DSensorModel";
import ModelInterface from "../../../core/models/ModelInterface";
import TransporterMotorCtrl from "../nui/transporter_motor/TransporterMotorCtrl";
import dsensor_composer from "./dsensor_composer";

export default function transporter_motor_composer(
  node: ModelInterface
): TransporterMotorCtrl {
  const sensors = node
    .get_childrens()
    .filter(
      (children: ModelInterface) =>
        // TODO: smart DSensor
        children.proto_name === DSensorModelProtoName
    )
    .map((m: ModelInterface) => dsensor_composer(m));

  return new TransporterMotorCtrl(node, sensors);
}
