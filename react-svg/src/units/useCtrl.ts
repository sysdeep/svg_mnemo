import { useEffect, useState } from "react";
import BaseCompose from "../core/nui/BaseCompose";

export default function useCtrl<T>(ctrl: BaseCompose<T>) {
  const [state, setState] = useState<T>(ctrl.value);

  useEffect(() => {
    ctrl.connect(() => {
      setState(ctrl.value);
    });
  }, []);

  return { state };
}
