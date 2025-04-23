import { ref } from "vue";
import DSensorModel from "../project/DSensorModel";
import useMount, { type AdapterHandler } from "./useMount";

export default function useDSensor(model: DSensorModel) {
  const is_active = ref<boolean>(false);
  const is_block = ref<boolean>(false);
  const is_error = ref<boolean>(false);

  const handlers_map = new Map<number, AdapterHandler<any>>([
    [DSensorModel.Attrs.state, (v: boolean) => (is_active.value = v)],
    [DSensorModel.Attrs.error, (v: boolean) => (is_error.value = v)],
    [DSensorModel.Attrs.block, (v: boolean) => (is_block.value = v)],
  ]);

  useMount(model, handlers_map);

  console.log("useDSensor");
  const on_click = () => {
    is_active.value = !is_active.value;
  };

  return {
    is_active,
    is_block,
    is_error,

    //
    on_click,
  };
}
