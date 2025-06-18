import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

const Attrs = {};

export const GenericModelProtoName = "Generic";

export class GenericModel extends BaseModel {
  proto_name: string = GenericModelProtoName;
  public static Attrs = Attrs;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}
