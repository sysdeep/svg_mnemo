import ModelInterface from "../models/ModelInterface";
import { ProtoSpec } from "./project_spec";

export default interface ProjectInterface {
  name: string;
  description: string;
  get_objects(): ModelInterface[];
  get_object(sys_id: string): ModelInterface | null;
  get_proto(proto_id: string): ProtoSpec | null;
  get_node(node_path: string): ModelInterface | null;
}
