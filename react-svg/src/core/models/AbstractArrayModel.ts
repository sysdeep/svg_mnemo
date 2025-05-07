import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

enum Attrs {}

export const AbstractArrayModelProtoName = "AbstractArray";

export default class AbstractArrayModel extends BaseModel {
  proto_name: string = AbstractArrayModelProtoName;
  public static Attrs = Attrs;

  constructor(
    project: ProjectInterface,
    proto_spec: ProtoSpec,
    object_spec: ObjectSpec
  ) {
    super(project, proto_spec, object_spec);
  }
}
