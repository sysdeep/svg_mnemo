import Attr from "../../core/models/attrs/Attr";
import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

enum Attrs {}

export default class AbstractObjectModel extends BaseModel {
  public static Attrs = Attrs;
  public static PROTO_NAME = "AbstractObject";

  constructor(
    project: ProjectInterface,
    proto_spec: ProtoSpec,
    object_spec: ObjectSpec
  ) {
    super(project, proto_spec, object_spec);
  }
}
