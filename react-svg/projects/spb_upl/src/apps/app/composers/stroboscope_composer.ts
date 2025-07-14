import ModelInterface from "../../../core/models/ModelInterface";
import StroboscopeCtrl from "../nui/stroboscope/StroboscopeCtrl";

export default function stroboscope_composer(node: ModelInterface): StroboscopeCtrl {
  return new StroboscopeCtrl(node);
}
