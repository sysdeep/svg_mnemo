import {
  Attrs,
  BeltTransporterModelProtoName,
  Direction as ProtoDirection,
} from "../../../../core/models/BeltTransporterModel";
import ModelInterface from "../../../../core/models/ModelInterface";
import BaseCompose from "../../../../core/nui/BaseCompose";
import { Direction } from "../../../../core/nui/components/enums";

export type WarehouseTransporterState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
  direction: Direction;
  is_reverse: boolean;
};

export default class WarehouseTransporterProto extends BaseCompose<WarehouseTransporterState> {
  constructor(model: ModelInterface) {
    super(model, {
      is_block: false,
      is_error: false,
      logic: 0,
      direction: Direction.forward,
      is_reverse: false,
    });

    // define handlers ------------------------------------
    this.append_handlers([
      [
        Attrs.logic,
        (state: WarehouseTransporterState, v: number) => ({
          ...state,
          logic: v,
        }),
      ],
      [
        Attrs.block,
        (state: WarehouseTransporterState, v: any) => ({
          ...state,
          is_block: v > 0,
        }),
      ],
      [
        Attrs.error_code,
        (state: WarehouseTransporterState, v: number) => ({
          ...state,
          is_error: v > 0,
        }),
      ],
      [Attrs.dir, this.on_direction],
    ]);
  }

  on_direction(state: WarehouseTransporterState, v: number) {
    const direction =
      v === ProtoDirection.forward ? Direction.forward : Direction.backward;
    return {
      ...state,
      direction,
    };
  }

  protected expected_models(): string[] {
    return [BeltTransporterModelProtoName];
  }
}
