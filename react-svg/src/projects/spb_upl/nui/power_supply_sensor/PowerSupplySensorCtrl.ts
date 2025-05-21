import ModelInterface from "../../../../core/models/ModelInterface";
import DSensorProto from "../../../../core/nui/units/dsensor/DSensorProto";

export class PowerSupplySensorCtrl extends DSensorProto {
  constructor(model: ModelInterface) {
    super(model);
  }
}
