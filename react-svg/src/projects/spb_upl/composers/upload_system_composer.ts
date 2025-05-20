import ModelInterface from "../../../core/models/ModelInterface";
import UploadSystemCtrl from "../nui/upload_system/UploadSystemCtrl";
import warehouse_area_composer from "./warehouse_area_composer";

export default function upload_system_composer(node: ModelInterface): UploadSystemCtrl {
  const wh_area = node.must_node("stuffWarehouseArea");

  return new UploadSystemCtrl(node, warehouse_area_composer(wh_area));
}
