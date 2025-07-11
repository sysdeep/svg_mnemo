import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { FBunkerStorage, Attrs as AttrsBase } from "./FBunkerStorage";

export const Attrs = {
  ...AttrsBase,
};

export const FBunkerStorageCommonProtoName = "FBunkerStorageCommon";

export class FBunkerStorageCommon extends FBunkerStorage {
  proto_name: string = FBunkerStorageCommonProtoName;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}
