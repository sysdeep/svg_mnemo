import DSensorProto from "@src/core/nui/units/dsensor/DSensorProto";
import ModelInterface from "../../../../core/models/ModelInterface";
import FreqConvCtrl from "../freq_conv/FreqConvCtrl";
import StroboscopeCtrl from "../stroboscope/StroboscopeCtrl";
import TransporterMotorCtrl from "../transporter_motor/TransporterMotorCtrl";
import ReceiveDistributorProto from "./ReceiveDistributorProto";

export default class ReceiveDistributorCtrl extends ReceiveDistributorProto {
  motor: TransporterMotorCtrl;
  freq_conv: FreqConvCtrl;
  stroboscope: StroboscopeCtrl;
  points: DSensorProto[];

  constructor(
    model: ModelInterface,
    motor: TransporterMotorCtrl,
    freq_conv: FreqConvCtrl,
    stroboscope: StroboscopeCtrl,
    points: DSensorProto[]
  ) {
    super(model);

    this.motor = motor;
    this.freq_conv = freq_conv;
    this.stroboscope = stroboscope;
    this.points = points;
  }
}
