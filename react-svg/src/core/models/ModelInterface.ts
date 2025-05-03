export default interface ModelInterface {
  sys_id: string;
  name: string;
  // PROTO_NAME: string;

  tree_level: number;
  tree_lk: number;
  tree_rk: number;
  get_node(node_path: string): ModelInterface | null;
  must_node(node_path: string): ModelInterface;
  get_childrens(): ModelInterface[];
  // get_proto_name(): string;

  append_top_node(node: ModelInterface): void;
}
