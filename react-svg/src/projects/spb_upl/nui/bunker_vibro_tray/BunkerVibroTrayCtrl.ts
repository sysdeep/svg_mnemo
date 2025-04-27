import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";

export type BunkerVibroTrayState = {
  //   is_block: boolean;
  //   is_error: boolean;
  //   logic: number;
};

export default class BunkerVibroTrayCtrl extends BaseCompose<BunkerVibroTrayState> {
  constructor(model: ModelInterface) {
    super(model, {});
  }
}
