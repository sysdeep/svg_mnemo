import ModelInterface from "../../../../core/models/ModelInterface";
import WarehouseBunkersAreaCtrl from "../warehouse_bunkers_area/WarehouseBunkersAreaCtrl";
import WarehouseTransporterCompose from "../warehouse_transporter/WarehouseTransporterCtrl";
import WarehouseLineProto from "./WarehouseLineProto";

export default class WarehouseLineCompose extends WarehouseLineProto {
  bunkers_area: WarehouseBunkersAreaCtrl;
  transporter: WarehouseTransporterCompose;

  constructor(
    model: ModelInterface,
    bunkers_area: WarehouseBunkersAreaCtrl,
    transporter: WarehouseTransporterCompose
  ) {
    super(model);

    this.bunkers_area = bunkers_area;
    this.transporter = transporter;
  }
}
