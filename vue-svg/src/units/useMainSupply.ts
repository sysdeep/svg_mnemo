import { onMounted, ref } from "vue";
import useMount, { type AdapterHandler } from "./useMount";
import MainSupplyModel from "../project/MainSupplyModel";

export default function useMainSupply(model: MainSupplyModel) {
  const is_error = ref<boolean>(false);
  const is_block = ref<boolean>(false);

  const handlers_map = new Map<number, AdapterHandler<any>>([
    [MainSupplyModel.Attrs.error, (v: boolean) => (is_error.value = v)],
    [MainSupplyModel.Attrs.block, (v: boolean) => (is_block.value = v)],
  ]);

  onMounted(() => {
    useMount(model, handlers_map);
  });

  return {
    is_error,
    is_block,
  };
}
