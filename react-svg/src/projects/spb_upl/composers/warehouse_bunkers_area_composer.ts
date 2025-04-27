import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseBunkersAreaCompose from "../nui/warehouse_bunkers_area/WarehouseBunkersAreaCompose";
import warehouse_bunker_composer from "./warehouse_bunker_composer";

export default function warehouse_bunkers_area_composer(
  node: ModelInterface
): WarehouseBunkersAreaCompose {
  const bunkers = [...Array(3)].map((_) => warehouse_bunker_composer(node));

  return new WarehouseBunkersAreaCompose(node, bunkers);
}
