import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

export const AbstractModelProtoName = "Abstract";

export class AbstractModel extends BaseModel {
  proto_name: string = AbstractModelProtoName;
  public static Attrs = {};

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}
