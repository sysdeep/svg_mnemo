import ModelInterface from "../../../core/models/ModelInterface";
import DSensorProto from "../../../core/nui/units/dsensor/DSensorProto";

export default function dsensor_composer(node: ModelInterface): DSensorProto {
  return new DSensorProto(node);
}
