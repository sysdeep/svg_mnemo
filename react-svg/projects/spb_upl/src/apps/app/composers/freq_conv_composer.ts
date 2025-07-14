import ModelInterface from "../../../core/models/ModelInterface";
import FreqConvCtrl from "../nui/freq_conv/FreqConvCtrl";
import dsensor_composer from "./dsensor_composer";

export default function freq_conv_composer(node: ModelInterface): FreqConvCtrl {
  const sensors = node.get_childrens().map((m) => dsensor_composer(m));
  return new FreqConvCtrl(node, sensors);
}
