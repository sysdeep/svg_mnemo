import { NwayMotorizedDustributionHopperProtoName } from "@src/core/models/NwayMotorizedDustributionHopper";
import ModelInterface from "../../../core/models/ModelInterface";
import ReceiveAreaCtrl from "../nui/receive_area/ReceiveAreaCtrl";
import receive_bunker_composer from "./receive_bunker_composer";
import receive_distributor_composer from "./receive_distributor_composer";
import bell_composer from "./bell_composer";

export default function receive_area_composer(node: ModelInterface): ReceiveAreaCtrl {
  // bunkers
  const bunkers = node
    .must_node("bunkers")
    .get_childrens(false)
    .map((m) => receive_bunker_composer(m));

  // distributor
  let distributor_node = node
    .get_childrens(false)
    .find((m) => m.proto_name === NwayMotorizedDustributionHopperProtoName);
  if (!distributor_node) {
    throw new Error("distribution node not found, parent: " + node.name);
  }
  const distributor = receive_distributor_composer(distributor_node);

  // bell
  const bell_node = node.get_node("bell");
  const bell = bell_node ? bell_composer(bell_node) : null;

  // TODO: other

  return new ReceiveAreaCtrl(node, bunkers, distributor, bell);
}
