import ModelInterface from "../models/ModelInterface";
import { Prototype } from "./prototype";

export default interface ProjectInterface {
  get_objects(): ModelInterface[];
  get_object(sys_id: string): ModelInterface | null;
  get_proto(proto_id: string): Prototype | null;
}
