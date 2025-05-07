import ModelInterface from "../models/ModelInterface";

export type Listener = () => void;
export type AttrHandler<T> = (state: T, v: any) => T;

export default class BaseCompose<Type> {
  private listeners: Listener[];
  value: Type;
  model: ModelInterface;
  attr_handlers: Map<number, AttrHandler<any>>;

  constructor(model: ModelInterface, default_value: Type) {
    this.listeners = [];
    this.model = model;
    this.value = default_value;
    this.attr_handlers = new Map<number, AttrHandler<any>>();
  }

  public connect(handler: Listener) {
    if (!this.listeners.includes(handler)) {
      this.listeners.push(handler);
    }
  }

  public disconnect(handler: Listener) {
    if (this.listeners.includes(handler)) {
      this.listeners = this.listeners.filter((l) => l !== handler);
    }
  }

  public set_state(st: Type) {
    this.value = st;
    this.emit();
  }

  public append_handler(attr_id: number, handler: AttrHandler<any>) {
    this.attr_handlers.set(attr_id, handler);
  }

  // NOTE: идея была чтобы передавать тек. стейт как в react
  // type FnUpdate = (state: Type)
  // protected update_state(fn:(state: Type) => Type ){
  //   this.set_state(...fn(this.value))
  // }

  protected connect_to_model() {
    // preload
    let pre_state = { ...this.value };
    this.attr_handlers.forEach((h, attr_id) => {
      pre_state = h(pre_state, this.model.get_attr_value(attr_id));
    });
    this.set_state(pre_state);

    // connect
    this.model.connect_changed((attr_id: number) => {
      let handler = this.attr_handlers.get(attr_id);
      if (handler) {
        // handler(this.model.get_attr_value(attr_id));
        let new_state = handler(this.value, this.model.get_attr_value(attr_id));
        this.set_state(new_state);
      }
    });
  }

  protected emit() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}
