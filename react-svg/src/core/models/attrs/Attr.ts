import { ProtoSpecAttr } from "../../project/project_spec";
import AttrModelInterface from "./AttrModelInterface";

export default class Attr<Type> {
  public id: number;
  public value: Type;
  private model: AttrModelInterface;
  public vtype: string;
  public name: string;

  constructor(
    model: AttrModelInterface,
    attr_spec: ProtoSpecAttr,
    // id: number,
    // vtype: string,
    default_value: Type
  ) {
    this.id = attr_spec.attr_id;
    this.value = default_value;
    this.model = model;
    this.vtype = attr_spec.vtype;
    this.name = attr_spec.name;
  }

  // public connect_listener(model: AttrModelInterface) {
  //   this.model = model;
  // }

  public get_value(): Type {
    return this.value;
  }

  // TODO: рассмотреть вариант конвертации, скорее всего в модели данных
  public set_value(v: Type) {
    this.value = v;
    this.model.on_attr_changed(this.id);
  }

  // static -------------------------------------------------------------------
  static convert(vtype: string, value: any): any {
    if (vtype === "int") {
      return parseInt(value);
    }

    if (vtype === "float") {
      return parseFloat(value);
    }

    if (vtype === "string") {
      return String(value);
    }

    return value;
  }
}
