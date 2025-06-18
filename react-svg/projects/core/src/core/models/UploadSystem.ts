import { AbstractActionObjModel, Attrs as AttrsBase, Cmd as CmdBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,
};

export const Cmd = {
  ...CmdBase,
};

export const UploadSystemProtoName = "UploadSystem";

export class UploadSystem extends AbstractActionObjModel {
  proto_name: string = UploadSystemProtoName;
}
