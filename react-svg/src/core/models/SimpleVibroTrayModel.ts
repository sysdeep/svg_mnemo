import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { AbstractActionObjModel, Attrs as AttrsBase, Cmd as CmdBase } from "./AbstractActionObjModel";

export const Direction = {
  forward: 1,
  backward: -1,
};

export const Cmd = {
  ...CmdBase,
  turn_on: 4, // Включить
  turn_off: 5, // Выключить
};

export const Attrs = {
  ...AttrsBase,

  imitation_mode: 6, // vtype: int,      access: 15 -sdwr, name: Режим имитации
};

// export type Attrs = AttrsBase | AttrsLocal;

export const SimpleVibroTrayModelProtoName = "SimpleVibroTray";

export class SimpleVibroTrayModel extends AbstractActionObjModel {
  proto_name: string = SimpleVibroTrayModelProtoName;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}
