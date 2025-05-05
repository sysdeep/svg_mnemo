import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import WarehouseLineCompose from "../warehouse_line/WarehouseLineCompose";

export type WarehouseAreaState = {
  // is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseAreaCompose extends BaseCompose<WarehouseAreaState> {
  lines: WarehouseLineCompose[];
  constructor(model: ModelInterface, lines: WarehouseLineCompose[]) {
    super(model, {});
    this.lines = lines;
  }
}
