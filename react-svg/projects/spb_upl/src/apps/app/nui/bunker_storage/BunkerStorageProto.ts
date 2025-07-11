import { FBunkerStorageCommonProtoName } from "@src/core/models/FBunkerStorageCommon";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import { Attrs, FBunkerStorageProtoName } from "@src/core/models/FBunkerStorage";

export type BunkerStorageState = {
  cur_mat_weight: number;
  max_weight: number;
  allow_negative: boolean;
  //   is_block: boolean;
  //   is_error: boolean;
  //   //   logic: number;
  //   is_mnemo_name: boolean;
  //   mnemo_name: string;
};

export default class BunkerStorageProto extends BaseCompose<BunkerStorageState> {
  constructor(model: ModelInterface) {
    super(model, { cur_mat_weight: 0, max_weight: 0, allow_negative: false });

    this.append_handlers([
      [Attrs.cur_mat_weight, (st: BunkerStorageState, v: number) => ({ ...st, cur_mat_weight: v })],
      [Attrs.max_weight, (st: BunkerStorageState, v: number) => ({ ...st, max_weight: v })],
      [Attrs.allow_negative, (st: BunkerStorageState, v: number) => ({ ...st, allow_negative: v > 0 })],
    ]);

    // TODO
    // # --- встаем на прослушку обновлений хранилища материалов
    //     materials.connect(materials.Events.updated, self.__on_materials_updated)

    // TODO
    // self.append_handler(Attr.material_id, self.set_material_id);
  }

  protected expected_models(): string[] {
    return [FBunkerStorageCommonProtoName, FBunkerStorageProtoName];
  }
}
