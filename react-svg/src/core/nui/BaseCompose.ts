import ModelInterface from "../models/ModelInterface";

export type Listener = () => void;
export type AttrHandler<T> = (state: T, v: any) => T;

export default class BaseCompose<Type> {
  private listeners: Listener[];
  value: Type;
  model: ModelInterface;
  attr_handlers: Map<number, AttrHandler<any>>;
  // expected_models: string[] = [];

  constructor(model: ModelInterface, default_value: Type) {
    this.listeners = [];
    this.model = model;
    this.value = default_value;
    this.attr_handlers = new Map<number, AttrHandler<any>>();

    // start
    this.check_expected_models(model);
  }

  protected expected_models(): string[] {
    // throw new Error("method expected_models - not implemented");
    return [];
  }

  private check_expected_models(model: ModelInterface) {
    if (!this.expected_models().includes(model.proto_name)) {
      console.log(this.model.sname);
    }
    // console.log(this.expected_models().includes(model.proto_name));
    // if (!this.expected_models().includes(model.proto_name)) {
    //   console.log(
    //     "unexpected model: " +
    //       model.proto_name +
    //       " in: " +
    //       this.expected_models().join(", ")
    //   );
    // }
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

  /**
   * добавить определённый хендлер для атрибута, предзагрузить
   */
  public append_handler(attr_id: number, handler: AttrHandler<any>) {
    // append
    this.attr_handlers.set(attr_id, handler);

    // preload
    this.set_state(
      handler({ ...this.value }, this.model.get_attr_value(attr_id))
    );
  }

  /**
   * добавить обработчики атрибутов, предзагрузить значениями из модели и подключить к изменениям модели
   */
  protected append_handlers(handlers: Array<[number, AttrHandler<any>]>) {
    // load self map
    handlers.forEach(([attr_id, h]) => {
      this.attr_handlers.set(attr_id, h);
    });

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
