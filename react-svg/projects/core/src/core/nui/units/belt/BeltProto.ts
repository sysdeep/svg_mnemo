import {
  Attrs,
  BeltTransporterModelProtoName,
  Direction as ProtoDirection,
} from "../../../models/BeltTransporterModel";
import ModelInterface from "../../../models/ModelInterface";
import BaseCompose from "../../BaseCompose";
import { Direction } from "../../components/enums";

export type BeltState = {
  is_block: boolean;
  is_error: boolean;
  logic: number;
  direction: Direction;
  is_reverse: boolean;
};

export default class BeltProto extends BaseCompose<BeltState> {
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
        (state: BeltState, v: number) => ({
          ...state,
          logic: v,
        }),
      ],
      [
        Attrs.block,
        (state: BeltState, v: any) => ({
          ...state,
          is_block: v > 0,
        }),
      ],
      [
        Attrs.error_code,
        (state: BeltState, v: number) => ({
          ...state,
          is_error: v > 0,
        }),
      ],
      [Attrs.dir, this.on_direction],
    ]);
  }

  on_direction(state: BeltState, v: number) {
    const direction = v === ProtoDirection.forward ? Direction.forward : Direction.backward;
    return {
      ...state,
      direction,
    };
  }

  protected expected_models(): string[] {
    return [BeltTransporterModelProtoName];
  }
}
