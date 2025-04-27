import BaseCompose from "../../../../core/nui/BaseCompose";
import WarehouseLineCompose from "../warehouse_line/WarehouseLineCompose";

export type WarehouseAreaState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseAreaCompose extends BaseCompose<WarehouseAreaState> {
  lines: WarehouseLineCompose[];
  constructor() {
    super({});

    this.lines = [...Array(3)].map((_) => new WarehouseLineCompose());
  }
}
