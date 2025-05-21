import ModelInterface from "../../../../core/models/ModelInterface";
import PowerSupplyAreaCtrl from "../power_supply_area/PowerSupplyAreaCtrl";
import WarehouseAreaCtrl from "../warehouse_area/WarehouseAreaCtrl";
import UploadSystemProto from "./UploadSystemProto";

export default class UploadSystemCtrl extends UploadSystemProto {
  warehouse_area: WarehouseAreaCtrl;
  power_supply_area: PowerSupplyAreaCtrl;

  constructor(model: ModelInterface, warehouse_area: WarehouseAreaCtrl, power_supply_area: PowerSupplyAreaCtrl) {
    super(model);

    this.warehouse_area = warehouse_area;
    this.power_supply_area = power_supply_area;
  }
}
