import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { AbstractActionObjModel, Attrs as AttrsBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,
};

export const StroboscopeProtoName = "Stroboscope";

export class Stroboscope extends AbstractActionObjModel {
  proto_name: string = StroboscopeProtoName;
  public static Attrs = Attrs;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}
