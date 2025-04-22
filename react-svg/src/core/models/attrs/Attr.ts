import AttrModelInterface from "./AttrModelInterface";

export default class Attr<Type> {
  public id: number;
  public value: Type;
  private model: AttrModelInterface | null;

  constructor(id: number, default_value: Type) {
    this.id = id;
    this.value = default_value;
    this.model = null;
  }

  public connect_listener(model: AttrModelInterface) {
    this.model = model;
  }

  public get_value(): Type {
    return this.value;
  }

  public set_value(v: Type) {
    this.value = v;
    this.model?.on_attr_changed(this.id);
  }
}
