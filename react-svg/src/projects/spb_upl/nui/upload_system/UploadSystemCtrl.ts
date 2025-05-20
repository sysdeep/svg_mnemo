import ModelInterface from "../../../../core/models/ModelInterface";
import WarehouseAreaCtrl from "../warehouse_area/WarehouseAreaCtrl";
import UploadSystemProto from "./UploadSystemProto";

export default class UploadSystemCtrl extends UploadSystemProto {
  warehouse_area: WarehouseAreaCtrl;
  constructor(model: ModelInterface, warehouse_area: WarehouseAreaCtrl) {
    super(model);

    this.warehouse_area = warehouse_area;
  }
}
