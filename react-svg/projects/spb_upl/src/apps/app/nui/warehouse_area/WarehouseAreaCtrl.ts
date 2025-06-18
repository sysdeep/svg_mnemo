import ModelInterface from "../../../../core/models/ModelInterface";
import WarehouseLineCompose from "../warehouse_line/WarehouseLineCompose";
import WarehouseAreaProto from "./WarehouseAreaProto";

export default class WarehouseAreaCtrl extends WarehouseAreaProto {
  lines: WarehouseLineCompose[];

  constructor(model: ModelInterface, lines: WarehouseLineCompose[]) {
    super(model);
    this.lines = lines;
  }
}
