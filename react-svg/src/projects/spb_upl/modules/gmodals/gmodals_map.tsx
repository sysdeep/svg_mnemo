import DSensorModal from "../../../../core/gui/gmodals/modals/DSensorModal";
import { DSensorModelProtoName } from "../../../../core/models/DSensorModel";
import ModelInterface from "../../../../core/models/ModelInterface";

const GModalsMap = {
  [DSensorModelProtoName]: (model: ModelInterface) => <DSensorModal model={model} />,
};

export default GModalsMap;
