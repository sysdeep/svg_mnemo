import ModelInterface from "../../../core/models/ModelInterface";
import ReceiveDistributorCtrl from "../nui/receive_distributor/ReceiveDistributorCtrl";
import dsensor_composer from "./dsensor_composer";
import freq_conv_composer from "./freq_conv_composer";
import stroboscope_composer from "./stroboscope_composer";
import transporter_motor_composer from "./transporter_motor_composer";

export default function receive_distributor_composer(node: ModelInterface): ReceiveDistributorCtrl {
  const motor = transporter_motor_composer(node.must_node("motor"));
  const freq_conv = freq_conv_composer(node.must_node("freqConvertor"));
  const stroboscope = stroboscope_composer(node.must_node("stroboscope"));
  const points = node
    .must_node("array_points")
    .get_childrens()
    .map((m) => dsensor_composer(m));

  return new ReceiveDistributorCtrl(node, motor, freq_conv, stroboscope, points);
}
