import BunkerModal from "../../../../core/gui/gmodals/modals/BunkerModal";
import DSensorModal from "../../../../core/gui/gmodals/modals/DSensorModal";
import { BunkerModelProtoName } from "../../../../core/models/BunkerModel";
import { DSensorModelProtoName } from "../../../../core/models/DSensorModel";
import ModelInterface from "../../../../core/models/ModelInterface";

const GModalsMap = {
  [DSensorModelProtoName]: (model: ModelInterface) => <DSensorModal model={model} />,
  [BunkerModelProtoName]: (model: ModelInterface) => <BunkerModal model={model} />,
};

export default GModalsMap;
