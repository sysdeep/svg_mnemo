import ModelInterface from "../../../core/models/ModelInterface";
import DSensorCompose from "../../../units/dsensor/DSensorCompose";

export default function dsensor_composer(node: ModelInterface): DSensorCompose {
  return new DSensorCompose(node);
}
