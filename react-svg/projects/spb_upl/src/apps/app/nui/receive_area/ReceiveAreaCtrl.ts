import ModelInterface from "../../../../core/models/ModelInterface";
import BellCtrl from "../bell/BellCtrl";
import ReceiveBunkerCtrl from "../receive_bunker/ReceiveBunkerCtrl";
import ReceiveDistributorCtrl from "../receive_distributor/ReceiveDistributorCtrl";
import ReceiveAreaProto from "./ReceiveAreaProto";

export default class ReceiveAreaCtrl extends ReceiveAreaProto {
  bunkers: ReceiveBunkerCtrl[];
  distributor: ReceiveDistributorCtrl;
  bell: BellCtrl | null;

  constructor(
    model: ModelInterface,
    bunkers: ReceiveBunkerCtrl[],
    distributor: ReceiveDistributorCtrl,
    bell: BellCtrl | null
  ) {
    super(model);
    this.bunkers = bunkers;
    this.distributor = distributor;
    this.bell = bell;
  }
}
