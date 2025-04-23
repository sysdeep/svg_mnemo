// export type DSensorAttrs = {
//   logic: number;
//   block: boolean;
// };

import Attr from "../core/models/attrs/Attr";
import BaseModel from "../core/models/BaseModel";

enum Attrs {
  state = 1,
  error = 2,
  block = 3,
}

export default class DSensorModel extends BaseModel {
  public static Attrs = Attrs;

  constructor() {
    let attrs_list = [
      new Attr<boolean>(Attrs.state, false), // state
      new Attr<boolean>(Attrs.error, false), // error
      new Attr<boolean>(Attrs.block, false), // block
    ];
    super(attrs_list);
  }

  public set_error(value: boolean) {
    this.get_attr(Attrs.error).set_value(value);
  }
}
