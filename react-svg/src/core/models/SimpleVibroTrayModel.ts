import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import AbstractActionObjModel, {
  // Attrs,
  Cmd as CmdBase,
} from "./AbstractActionObjModel";

// """направление вращения"""
export enum Direction {
  forward = 1,
  backward = -1,
}

// """список кодов cmd"""

enum CmdLocal {
  turn_on = 4, // Включить
  turn_off = 5, // Выключить
}
export type Cmd = CmdBase | CmdLocal;

// TODO: дублирование
export enum Attrs {
  // FROM PARENT
  cmd = 0,
  logic = 1,
  block = 2,
  error_code = 3,
  cur_cmd = 4,
  ready = 5,
  // use_in_dosing	= 6, 			// Флаг использования в дозировании

  // LOCAL
  imitation_mode = 6, // vtype: int,      access: 15 -sdwr, name: Режим имитации
}

// export type Attrs = AttrsBase | AttrsLocal;

export const SimpleVibroTrayModelProtoName = "SimpleVibroTray";

export default class SimpleVibroTrayModel extends AbstractActionObjModel {
  proto_name: string = SimpleVibroTrayModelProtoName;

  constructor(
    project: ProjectInterface,
    proto_spec: ProtoSpec,
    object_spec: ObjectSpec
  ) {
    super(project, proto_spec, object_spec);
  }
}
