import { ProtoSpec } from "../project/project_spec";
import Attr from "./attrs/Attr";

export type AttrChangeEventHandler = (attr_id: number) => void;

export default interface ModelInterface {
  proto_name: string;
  sys_id: string;
  name: string;
  sname: string;

  // TODO: obj_id
  // TODO: plc_id

  tree_level: number;
  tree_lk: number;
  tree_rk: number;

  get_node(node_path: string): ModelInterface | null;
  must_node(node_path: string): ModelInterface;
  get_childrens(use_links?: boolean): ModelInterface[];

  append_top_node(node: ModelInterface): void;

  get_proto(): ProtoSpec;

  // get_attr_value(attr_id: number)
  set_attr_value(attr_id: number, value: any): void;
  get_attr_value(attr_id: number): any;
  get_attrs(): Attr<any>[];

  send_attr(attr_id: number, value: any): void;

  connect_changed(handler: AttrChangeEventHandler): void;
  disconnect_changed(handler: AttrChangeEventHandler): void;
}
