import Attr from "../../core/models/attrs/Attr";
import Base from "../../core/models/BaseModel";
import DSensorModel from "../dsensor/DSensorModel";

enum Attrs {
  block = 1,
  error = 3,
}

export default class MainSupplyModel extends Base {
  public sensors: DSensorModel[];
  public static Attrs = Attrs;

  constructor() {
    let attrs_list = [
      new Attr<boolean>(Attrs.block, false),
      new Attr<boolean>(Attrs.error, false),
    ];
    super(attrs_list);

    // composition
    this.sensors = [];
    for (let i = 0; i < 3; i++) {
      this.sensors.push(new DSensorModel());
    }
  }
}
