import { AbstractModelProtoName } from "@src/core/models/AbstractModel";
import ModelInterface from "../../../core/models/ModelInterface";
import UploadSystemCtrl from "../nui/upload_system/UploadSystemCtrl";
import power_supply_area_composer from "./power_supply_area_composer";
import receive_area_composer from "./receive_area_composer";
import warehouse_area_composer from "./warehouse_area_composer";

export default function upload_system_composer(node: ModelInterface): UploadSystemCtrl {
  const wh_area = node.must_node("stuffWarehouseArea");
  const power_supply_area = power_supply_area_composer(node.must_node("powerSupplyArea"));

  // receive areas
  const receiver_areas = node
    .must_node("stuffRectiversArea")
    .get_childrens()
    .filter((m) => m.proto_name === AbstractModelProtoName)
    .map((m) => receive_area_composer(m));

  return new UploadSystemCtrl(node, warehouse_area_composer(wh_area), power_supply_area, receiver_areas);
}
