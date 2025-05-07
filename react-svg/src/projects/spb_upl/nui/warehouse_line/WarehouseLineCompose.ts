import ModelInterface from "../../../../core/models/ModelInterface";
import { WH_LineModelProtoName } from "../../../../core/models/WH_LineModel";
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

  constructor(
    model: ModelInterface,
    bunkers_area: WarehouseBunkersAreaCompose,
    transporter: WarehouseTransporterCompose
  ) {
    super(model, {});

    this.bunkers_area = bunkers_area;
    this.transporter = transporter;
  }

  protected expected_models(): string[] {
    return [WH_LineModelProtoName];
  }
}
