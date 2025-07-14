import ModelInterface from "@src/core/models/ModelInterface";
import FreqConvProto from "./FreqConvProto";
import DSensorProto from "@src/core/nui/units/dsensor/DSensorProto";

export default class FreqConvCtrl extends FreqConvProto {
  sensors: DSensorProto[];

  constructor(model: ModelInterface, sensors: DSensorProto[]) {
    super(model);

    this.sensors = sensors;
  }
}
