import ProjectInterface from "../project/project_interface";
import Attr from "./attrs/Attr";
import AttrModelInterface from "./attrs/AttrModelInterface";
import ModelInterface from "./ModelInterface";

type AttrChangeEventHandler = (attr_id: number) => void;

export default class BaseModel implements ModelInterface, AttrModelInterface {
  protected project: ProjectInterface;
  public sys_id: string;
  public static PROTO_NAME = "Base";
  private attr_handlers: AttrChangeEventHandler[];
  private attrs: { [key: number]: Attr<any> };
  private cache_nodes: { [key: string]: string };
  private top_nodes: { [key: string]: string };

  constructor(
    project: ProjectInterface,
    sys_id: string,
    attrs_list: Attr<any>[]
  ) {
    this.project = project;
    this.sys_id = sys_id;

    // init attrs
    this.attrs = {};
    for (let attr of attrs_list) {
      this.attrs[attr.id] = attr;
      attr.connect_listener(this);
    }

    this.attr_handlers = [];

    this.cache_nodes = {};
    this.top_nodes = {};
  }

  public get_node(node_path: string): ModelInterface | null {
    // try get in cache -----------------------------------
    let node_sys_id = this.cache_nodes[node_path];
    if (node_sys_id) return this.project.get_object(node_sys_id);

    // otherwise - try find in self -----------------------
    let nodes_array = node_path.split("."); // разбиваем строку
    let top_node = nodes_array[0]; // 1 элемент
    node_sys_id = this.top_nodes[top_node]; // ищем в своём словаре

    // если не нашли - ошибка - такого элемента нет!!!
    if (node_sys_id === undefined) return null;

    let node = this.project.get_object(node_sys_id);
    if (!node) {
      return null;
    }

    // если в пути только 1 элемент - поиск закончен
    if (nodes_array.length === 1) {
      this.cache_nodes[node_path] = node.sys_id;
      return node;
    }

    // иначе рекурсивно спускаемся ниже

    // создаём новый путь без обработанного элемента
    let next_node_path = nodes_array.slice(1, nodes_array.length).join(".");

    // возвращаем результат след. поиска
    let next_node = node.get_node(next_node_path);

    if (next_node) {
      this.cache_nodes[node_path] = next_node.sys_id;
    }
    return next_node;
  }

  public connect_changed(handler: AttrChangeEventHandler) {
    if (this.attr_handlers.includes(handler)) return;
    this.attr_handlers.push(handler);
  }

  public get_attr(attr_id: number): Attr<any> {
    let attr = this.attrs[attr_id];
    if (!attr) {
      throw new Error(`no attr with id: ${attr_id} found`);
    }
    return attr;
  }

  public has_attr(attr_id: number): boolean {
    let attr = this.attrs[attr_id];
    return !!attr;
  }

  // private ------------------------------------------------------------------
  on_attr_changed(attr_id: number): void {
    for (let h of this.attr_handlers) {
      h(attr_id);
    }
  }
}
