export default interface ModelInterface {
  sys_id: string;
  get_node(node_path: string): ModelInterface | null;
}
