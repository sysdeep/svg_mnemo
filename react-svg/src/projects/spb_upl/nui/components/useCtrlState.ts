import { useEffect, useState } from "react";
import BaseCompose from "../../../../core/nui/BaseCompose";

export default function useCtrlState<T>(ctrl: BaseCompose<T>): T {
  const [state, setState] = useState<T>({ ...ctrl.value });

  useEffect(() => {
    const on_change = () => setState({ ...ctrl.value });

    ctrl.connect(on_change);

    return () => ctrl.disconnect(on_change);
  }, []);

  return state;
}
