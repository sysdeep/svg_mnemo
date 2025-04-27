import ModelInterface from "../models/ModelInterface";

export type Listener = () => void;

export default class BaseCompose<Type> {
  private listeners: Listener[];
  value: Type;
  model: ModelInterface;

  constructor(model: ModelInterface, default_value: Type) {
    this.listeners = [];
    this.model = model;
    this.value = default_value;
  }

  public connect(handler: Listener) {
    if (!this.listeners.includes(handler)) {
      this.listeners.push(handler);
    }
  }

  public set_state(st: Type) {
    this.value = st;
    this.emit();
  }

  protected emit() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}
