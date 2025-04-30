import ModelInterface from "../models/ModelInterface";
import ProjectInterface from "./project_interface";
import { Prototype } from "./prototype";

export default class Project implements ProjectInterface {
  protos_map: { [key: string]: Prototype };
  objects: { [key: string]: ModelInterface };

  constructor(protos: { [key: string]: Prototype }) {
    this.protos_map = protos;
    this.objects = {};
  }

  get_proto(proto_id: string): Prototype | null {
    return this.protos_map[proto_id] || null;
  }

  get_objects(): ModelInterface[] {
    return Object.values(this.objects);
  }
  get_object(sys_id: string): ModelInterface | null {
    return this.objects[sys_id] || null;
  }

  set_objects(objects: ModelInterface[]) {
    this.objects = objects.reduce(
      (map: { [key: string]: ModelInterface }, obj: ModelInterface) => {
        map[obj.sys_id] = obj;
        return map;
      },
      {}
    );
  }
}
