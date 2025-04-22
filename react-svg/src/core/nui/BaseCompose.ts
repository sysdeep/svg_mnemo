export type Listener = () => void;

export default class BaseCompose<Type> {
  private listeners: Listener[];
  value: Type;

  constructor(default_value: Type) {
    this.listeners = [];
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
