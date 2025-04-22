import { useEffect, useState } from "react";
import DSensorModel from "./DSensorModel";
import { AdapterHandler, mount_adapter } from "../model_adapter_utils";

export default function useDSensorAdapter(model: DSensorModel) {
  const [state, setState] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handlers_map = new Map<number, AdapterHandler<any>>([
    [DSensorModel.Attrs.state, setState],
    [DSensorModel.Attrs.error, setError],
    [DSensorModel.Attrs.block, setBlock],
  ]);

  useEffect(() => {
    console.log("dsadapter mounted");
    mount_adapter(model, handlers_map);
  }, []);

  const on_error = (st: boolean) => model.set_error(st);

  return { state, block, error, on_error };
}
