import ModelInterface from "../../../core/models/ModelInterface";
import WarehouseBunkersAreaCtrl from "../nui/warehouse_bunkers_area/WarehouseBunkersAreaCtrl";
import warehouse_bunker_composer from "./warehouse_bunker_composer";

export default function warehouse_bunkers_area_composer(
  node: ModelInterface
): WarehouseBunkersAreaCtrl {
  const bunkers = node
    .get_childrens()
    .map((m: ModelInterface) => warehouse_bunker_composer(m));
  // const bunkers = [...Array(3)].map((_) => warehouse_bunker_composer(node));

  return new WarehouseBunkersAreaCtrl(node, bunkers);
}
