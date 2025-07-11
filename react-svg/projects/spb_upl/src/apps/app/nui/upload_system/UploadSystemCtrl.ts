import ModelInterface from "../../../../core/models/ModelInterface";
import PowerSupplyAreaCtrl from "../power_supply_area/PowerSupplyAreaCtrl";
import ReceiveAreaCtrl from "../receive_area/ReceiveAreaCtrl";
import WarehouseAreaCtrl from "../warehouse_area/WarehouseAreaCtrl";
import UploadSystemProto from "./UploadSystemProto";

export default class UploadSystemCtrl extends UploadSystemProto {
  warehouse_area: WarehouseAreaCtrl;
  power_supply_area: PowerSupplyAreaCtrl;
  receive_areas: ReceiveAreaCtrl[];

  constructor(
    model: ModelInterface,
    warehouse_area: WarehouseAreaCtrl,
    power_supply_area: PowerSupplyAreaCtrl,
    receive_areas: ReceiveAreaCtrl[]
  ) {
    super(model);

    this.warehouse_area = warehouse_area;
    this.power_supply_area = power_supply_area;
    this.receive_areas = receive_areas;
  }
}
