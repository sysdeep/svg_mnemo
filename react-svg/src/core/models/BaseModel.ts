import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec, ProtoSpecAttr } from "../project/project_spec";
import Attr from "./attrs/Attr";
import AttrModelInterface from "./attrs/AttrModelInterface";
import ModelInterface, { AttrChangeEventHandler } from "./ModelInterface";

export const BaseModelProtoName = "Base";

export default class BaseModel implements ModelInterface, AttrModelInterface {
  proto_name: string = BaseModelProtoName;
  proto_id: string;
  protected project: ProjectInterface;
  public sys_id: string;
  public name: string;
  public sname: string;
  public tree_level: number;
  public tree_lk: number;
  public tree_rk: number;
  private attr_handlers: AttrChangeEventHandler[];
  private attrs_map: { [key: number]: Attr<any> };
  private cache_nodes: { [key: string]: string };
  private top_nodes: { [key: string]: string };

  constructor(
    project: ProjectInterface,
    proto_spec: ProtoSpec,
    object_spec: ObjectSpec
    // project: ProjectInterface,
    // sys_id: string,
    // attrs_list: Attr<any>[]
  ) {
    this.project = project;
    this.sys_id = object_spec.sys_id;
    this.tree_level = object_spec.tree_level;
    this.tree_lk = object_spec.tree_lk;
    this.tree_rk = object_spec.tree_rk;
    this.name = object_spec.name;
    this.sname = object_spec.sname;
    this.proto_id = proto_spec.proto_id;

    // init attrs
    // this.attrs = {};
    // for (let attr of attrs_list) {
    //   this.attrs[attr.id] = attr;
    //   attr.connect_listener(this);
    // }
    this.attrs_map = this._make_attrs_map(proto_spec, object_spec);

    this.attr_handlers = [];

    this.cache_nodes = {};
    this.top_nodes = {};
  }

  public get_node(node_path: string): ModelInterface | null {
    if (!this.project) return null;

    // try get in cache -----------------------------------
    let node_sys_id = this.cache_nodes[node_path];
    if (node_sys_id) return this.project.get_object(node_sys_id);

    // otherwise - try find in self -----------------------
    const nodes_array = node_path.split("."); // разбиваем строку
    const top_node = nodes_array[0]; // 1 элемент
    node_sys_id = this.top_nodes[top_node]; // ищем в своём словаре

    // если не нашли - ошибка - такого элемента нет!!!
    if (node_sys_id === undefined) return null;

    const node = this.project.get_object(node_sys_id);
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
    const next_node_path = nodes_array.slice(1, nodes_array.length).join(".");

    // возвращаем результат след. поиска
    const next_node = node.get_node(next_node_path);

    if (next_node) {
      this.cache_nodes[node_path] = next_node.sys_id;
    }
    return next_node;
  }

  public must_node(node_path: string): ModelInterface {
    const node = this.get_node(node_path);
    if (!node) {
      throw new Error(`node ${this.name} no children path - ${node_path}`);
    }
    return node;
  }

  public connect_changed(handler: AttrChangeEventHandler) {
    if (this.attr_handlers.includes(handler)) return;
    this.attr_handlers.push(handler);
  }

  public disconnect_changed(handler: AttrChangeEventHandler) {
    if (!this.attr_handlers.includes(handler)) return;
    this.attr_handlers = this.attr_handlers.filter((h) => h !== handler);
  }

  public get_attr(attr_id: number): Attr<any> {
    const attr = this.attrs_map[attr_id];
    if (!attr) {
      throw new Error(`no attr with id: ${attr_id} found`);
    }
    return attr;
  }

  public has_attr(attr_id: number): boolean {
    const attr = this.attrs_map[attr_id];
    return !!attr;
  }

  get_childrens(): ModelInterface[] {
    const childrens = this.project.get_objects().filter((obj) => {
      return obj.tree_lk > this.tree_lk && obj.tree_rk < this.tree_rk && obj.tree_level - 1 === this.tree_level;
    });

    // TODO
    //     #--- сортировка
    //     childrens.sort(key=lambda item: item.tree_lk)

    // TODO
    //     if links:
    //         for litem in self.parent.links:
    //             if litem["from"] == self.sys_id:
    //                 childrens.append(self.parent.objects[litem["to"]])

    //     if back_links:
    //         for litem in self.parent.links:
    //             if litem["to"] == self.sys_id:
    //                 childrens.append(self.parent.objects[litem["from"]])

    return childrens;
  }

  append_top_node(node: ModelInterface) {
    this.top_nodes[node.name] = node.sys_id;
  }

  get_proto(): ProtoSpec {
    const proto = this.project.get_proto(this.proto_id);
    if (!proto) {
      throw new Error("No proto with id: " + this.proto_id);
    }
    return proto;
  }

  /**
   * приходящее от сервера значение атрибута
   */
  set_attr_value(attr_id: number, value: any) {
    console.log(`set attr value: ${attr_id} - ${value}`);
    const attr = this.attrs_map[attr_id];
    if (!attr) {
      throw new Error(`${this.name} - no attr with id: ${attr_id}`);
    }

    const need_value = Attr.convert(attr.vtype, value);
    attr.set_value(need_value);
  }

  get_attr_value(attr_id: number): any {
    return this.get_attr(attr_id).get_value();
  }

  get_attrs(): Attr<any>[] {
    return Object.values(this.attrs_map);
  }

  /**
   * уходящее на сервер значение атрибута
   */
  send_attr(attr_id: number, value: any) {
    // TODO: отсылать на сервер
    this.set_attr_value(attr_id, value);
  }

  // private ------------------------------------------------------------------
  on_attr_changed(attr_id: number): void {
    for (const h of this.attr_handlers) {
      h(attr_id);
    }
  }

  _make_attrs_map(proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    // attrs
    const attrs_list = proto_spec.attrs.map((proto_attr) => {
      const obj_value = object_spec.attrs_values ? object_spec.attrs_values[String(proto_attr.attr_id)] : undefined;
      return this._make_attr(proto_attr, obj_value);
    });

    return attrs_list.reduce((map: { [key: number]: Attr<any> }, attr: Attr<any>) => {
      map[attr.id] = attr;
      return map;
    }, {});
  }

  // TODO: use Attr.convert
  _make_attr(proto_attr: ProtoSpecAttr, obj_value: any | undefined): Attr<any> {
    const need_value = obj_value === undefined ? proto_attr.value : obj_value;

    if (proto_attr.vtype === "int") {
      return new Attr<number>(this, proto_attr, parseInt(need_value));
    }

    if (proto_attr.vtype === "float") {
      return new Attr<number>(this, proto_attr, parseFloat(need_value));
    }

    if (proto_attr.vtype === "string") {
      return new Attr<string>(this, proto_attr, String(need_value));
    }

    return new Attr<any>(this, proto_attr, need_value);
  }
}
