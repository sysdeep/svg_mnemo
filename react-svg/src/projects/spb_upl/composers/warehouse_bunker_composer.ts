import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseBunkerCtrl from "../nui/warehouse_bunker/WarehouseBunkerCtrl";
import bunker_vibro_tray_composer from "./bunker_vibro_tray_composer";

export default function warehouse_bunker_composer(
  node: ModelInterface
): WarehouseBunkerCtrl {
  const vibro_trays = [...Array(7)].map((_) => {
    return bunker_vibro_tray_composer(node);
  });
  return new WarehouseBunkerCtrl(node, vibro_trays);
}
