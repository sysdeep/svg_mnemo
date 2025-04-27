import BaseCompose from "../../../../core/nui/BaseCompose";
import WarehouseBunkersAreaCompose from "../warehouse_bunkers_area/WarehouseBunkersAreaCompose";
import WarehouseTransporterCompose from "../warehouse_transporter/WarehouseTransporterCompose";

export type WarehouseLineState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class WarehouseLineCompose extends BaseCompose<WarehouseLineState> {
  bunkers_area: WarehouseBunkersAreaCompose;
  transporter: WarehouseTransporterCompose;
  constructor() {
    super({});

    this.bunkers_area = new WarehouseBunkersAreaCompose();
    this.transporter = new WarehouseTransporterCompose();
  }
}
