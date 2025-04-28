import { useState } from "react";

export default function useCycle<X>(initial: X[], is_forward: boolean) {
  const [value, setValue] = useState<X[]>([...initial]);

  const next = () => {
    if (is_forward) {
      setValue((v) => rot_forward(v));
    } else {
      setValue((v) => rot_backward(v));
    }

    // result = [
    //   ...result.slice(result.length - 1, result.length),
    //   ...result.slice(0, result.length - 1),
    // ];
  };

  return {
    value,
    next,
  };
}

function rot_backward(items: any[]): any[] {
  return [...items.slice(1, items.length), ...items.slice(0, 1)];
}

function rot_forward(items: any[]): any[] {
  return [
    ...items.slice(items.length - 1, items.length),
    ...items.slice(0, items.length - 1),
  ];
}
