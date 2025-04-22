import { useEffect, useState } from "react";
import MainSupplyModel from "./MainSupplyModel";
import { AdapterHandler, mount_adapter } from "../model_adapter_utils";

export default function useMainSupplyModelAdapter(model: MainSupplyModel) {
  const [error, setError] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);

  const handlers_map = new Map<number, AdapterHandler<any>>([
    [MainSupplyModel.Attrs.error, setError],
    [MainSupplyModel.Attrs.block, setBlock],
  ]);

  useEffect(() => {
    console.log("main supply adapter - mount");
    mount_adapter(model, handlers_map);
  }, []);

  return {
    error,
    block,
  };
}
