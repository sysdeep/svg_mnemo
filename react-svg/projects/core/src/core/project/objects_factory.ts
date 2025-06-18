import { ModelInterfaceConstructor } from "@src/apps/app/modules/project/models_models";
import { ObjectSpec, ProtoSpec } from "./project_spec";
import { GenericModelProtoName } from "../models/GenericModel";
import ProjectInterface from "./project_interface";

export type ProtoClassMap = { [key: string]: ModelInterfaceConstructor };

export function create_object(project: ProjectInterface, obj: ObjectSpec, proto: ProtoSpec, classes: ProtoClassMap) {
  // create model
  let ModelCls = classes[proto.name];

  if (!ModelCls) {
    // throw new Error("no class for proto: " + proto.name);
    // console.log("undefined proto name - use generic");
    ModelCls = classes[GenericModelProtoName];
  }

  return new ModelCls(project, proto, obj);
}
