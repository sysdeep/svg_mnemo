import ModelInterface from "../models/ModelInterface";
import { IHandlerOdata } from "../transport/handler_odata";
import { LinkSpec, ProtoSpec } from "./project_spec";

export default interface ProjectInterface extends IHandlerOdata {
  name: string;
  description: string;
  get_objects(): ModelInterface[];
  get_object(sys_id: string): ModelInterface | null;
  get_proto(proto_id: string): ProtoSpec | null;
  get_node(node_path: string): ModelInterface | null;
  get_links(): LinkSpec[];
  must_node(node_path: string): ModelInterface;

  send_package(sys_id: string, attrs: AttrPayload[]): void;
}

export type AttrPayload = {
  attr_id: number;
  value: any;
};
