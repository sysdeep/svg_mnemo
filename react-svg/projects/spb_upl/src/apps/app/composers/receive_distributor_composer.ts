import ModelInterface from "../../../core/models/ModelInterface";
import ReceiveDistributorCtrl from "../nui/receive_distributor/ReceiveDistributorCtrl";

export default function receive_distributor_composer(node: ModelInterface): ReceiveDistributorCtrl {
  // TODO: other

  return new ReceiveDistributorCtrl(node);
}
