import Attr from "./attrs/Attr";
import AttrModelInterface from "./attrs/AttrModelInterface";
import ModelInterface from "./ModelInterface";

type AttrChangeEventHandler = (attr_id: number) => void;

export default class BaseModel implements ModelInterface, AttrModelInterface {
  private attr_handlers: AttrChangeEventHandler[];
  private attrs: { [key: number]: Attr<any> };

  constructor(attrs_list: Attr<any>[]) {
    // init attrs
    this.attrs = {};
    for (let attr of attrs_list) {
      this.attrs[attr.id] = attr;
      attr.connect_listener(this);
    }

    this.attr_handlers = [];
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
