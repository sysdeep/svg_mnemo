import { UploadSystem, Attrs as AttrsBase } from "./UploadSystem";

export const Attrs = {
  ...AttrsBase,
};

export const InertUploadSystemProtoName = "InertUploadSystem";

export class InertUploadSystem extends UploadSystem {
  proto_name: string = InertUploadSystemProtoName;
}
