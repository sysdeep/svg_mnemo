import { AbstractActionObjModel, Attrs as AttrsBase, Cmd as CmdBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,
};

export const Cmd = {
  ...CmdBase,
};

export const GenericDistributionHopperProtoName = "GenericDistributionHopper";

export class GenericDistributionHopper extends AbstractActionObjModel {
  proto_name: string = GenericDistributionHopperProtoName;
}
