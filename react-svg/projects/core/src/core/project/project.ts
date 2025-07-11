import ModelInterface from "../models/ModelInterface";
import { create_object, ProtoClassMap } from "./objects_factory";
import ProjectInterface from "./project_interface";
import { LinkSpec, ObjectSpec, ProjectSpec, ProtoSpec } from "./project_spec";

type ProtosMap = { [key: string]: ProtoSpec };

// type ObjectLink = {
//   from: string;
//   to: string;
// };

export default class Project implements ProjectInterface {
  name: string;
  description: string;
  protos_map: ProtosMap;
  objects_map: { [key: string]: ModelInterface };
  links: LinkSpec[];

  // TODO: подумать, может вынести в отдельный объект типа root_node
  private top_nodes: { [key: string]: string };
  private cache_nodes: { [key: string]: string };

  // TODO: plcs

  constructor(project_spec: ProjectSpec, proto_class_map: ProtoClassMap) {
    this.name = project_spec.body.name;
    this.description = project_spec.body.description;
    this.protos_map = this._make_protos_map(project_spec.protos);
    this.objects_map = this._make_objects_map(
      this._make_models_list(project_spec.body.objects, this.protos_map, proto_class_map)
    );
    this.links = [...project_spec.body.links];

    this.top_nodes = {};
    this.cache_nodes = {};

    this._extend_models();
  }

  get_proto(proto_id: string): ProtoSpec | null {
    return this.protos_map[proto_id] || null;
  }

  get_objects(): ModelInterface[] {
    return Object.values(this.objects_map);
  }
  get_object(sys_id: string): ModelInterface | null {
    return this.objects_map[sys_id] || null;
  }

  get_links(): LinkSpec[] {
    return [...this.links];
  }

  // node interface -----------------------------------------------------------
  append_top_node(node: ModelInterface) {
    this.top_nodes[node.name] = node.sys_id;
  }

  get_node(node_path: string): ModelInterface | null {
    //--- try get in cache
    let node_sys_id = this.cache_nodes[node_path];
    if (node_sys_id) return this.get_object(node_sys_id);

    //-----
    // otherwise - try find in self -----------------------
    let nodes_array = node_path.split("."); // разбиваем строку
    let top_node = nodes_array[0]; // 1 элемент
    node_sys_id = this.top_nodes[top_node]; // ищем в своём словаре

    // если не нашли - ошибка - такого элемента нет!!!
    if (node_sys_id === undefined) return null;

    let node = this.get_object(node_sys_id);
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

  must_node(node_path: string): ModelInterface {
    const node = this.get_node(node_path);

    if (!node) {
      throw new Error(`project - no node for path: ${node_path} found`);
    }

    return node;
  }

  // private ------------------------------------------------------------------
  _make_protos_map(protos_list: ProtoSpec[]): ProtosMap {
    return protos_list.reduce((map: ProtosMap, proto: ProtoSpec) => {
      map[proto.proto_id] = proto;
      return map;
    }, {});
  }

  _make_models_list(objects: ObjectSpec[], proto_map: ProtosMap, proto_class_map: ProtoClassMap): ModelInterface[] {
    return objects
      .filter((obj) => obj.name !== "root")
      .map((obj) => {
        const proto = proto_map[obj.proto_code];
        if (proto === undefined) {
          throw new Error("no proto by proto_code: " + obj.proto_code);
        }
        return create_object(this, obj, proto, proto_class_map);
      });
  }

  // _make_model(obj: ObjectSpec, proto: ProtoSpec, protos_map: ProtosMap): ModelInterface {
  //   // // attrs
  //   // const attrs = proto.attrs.map((proto_attr) => {
  //   //   const obj_value = obj.attrs_values
  //   //     ? obj.attrs_values[String(proto_attr.attr_id)]
  //   //     : undefined;
  //   //   return this._make_attr(proto_attr, obj_value);
  //   // });

  //   // fill values
  //   // TODO

  //   // create model
  //   let ModelCls = protos_map[proto.name];

  //   if (!ModelCls) {
  //     // throw new Error("no class for proto: " + proto.name);
  //     // console.log("undefined proto name - use generic");
  //     ModelCls = protos_map[GenericModelProtoName];
  //   }

  //   return new ModelCls(this, proto, obj);
  // }

  _make_objects_map(objects: ModelInterface[]): {
    [key: string]: ModelInterface;
  } {
    return objects.reduce((map: { [key: string]: ModelInterface }, obj: ModelInterface) => {
      map[obj.sys_id] = obj;
      return map;
    }, {});
  }

  _extend_models() {
    console.log("расширение моделей");

    const tnode = (parent: ModelInterface, node: ModelInterface) => {
      parent.append_top_node(node);
      let node_childrens = node.get_childrens(false);
      node_childrens.forEach((child) => {
        tnode(node, child);
      });
    };

    let root_models = Object.values(this.objects_map).filter((model) => {
      return model.tree_level === 1;
    });

    root_models.forEach((model) => {
      this.append_top_node(model);
      let node_childrens = model.get_childrens(false);
      // console.log(model, node_childrens);
      node_childrens.forEach((child) => {
        tnode(model, child);
      });
    });

    // def tnode(parent, node):
    //     """добавление потомка в область видимости родителя и дальнейший поиск потомков"""

    //     parent.top_nodes[node.name] = node.sys_id

    //     node_childrens = node.get_childrens()

    //     for children in node_childrens:
    //         tnode(node, children)

    // root_models = [model for model in self.objects.values() if model.tree_level == 1]

    // for model in root_models:

    //     tnode(self, model)
  }
}
