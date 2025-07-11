import ModelInterface from "../../../../core/models/ModelInterface";
import ReceiveBunkerCtrl from "../receive_bunker/ReceiveBunkerCtrl";
import ReceiveDistributorCtrl from "../receive_distributor/ReceiveDistributorCtrl";
import ReceiveAreaProto from "./ReceiveAreaProto";

export default class ReceiveAreaCtrl extends ReceiveAreaProto {
  bunkers: ReceiveBunkerCtrl[];
  distributor: ReceiveDistributorCtrl;

  constructor(model: ModelInterface, bunkers: ReceiveBunkerCtrl[], distributor: ReceiveDistributorCtrl) {
    super(model);
    this.bunkers = bunkers;
    this.distributor = distributor;
  }
}
