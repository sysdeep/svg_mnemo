import { AbstractFreqConv, Attrs as AttrsBase } from "./AbstractFreqConv";

export const Attrs = {
  ...AttrsBase,
};

export const FreqConvertor_ELHART_EMDProtoName = "FreqConvertor_ELHART_EMD";

export class FreqConvertor_ELHART_EMD extends AbstractFreqConv {
  proto_name: string = FreqConvertor_ELHART_EMDProtoName;
  public static Attrs = Attrs;
}
