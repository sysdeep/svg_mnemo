import { useEffect, useState } from "react";
import Sensor from "../../views/Sensor";
import DSensorCompose, { DSensorState } from "./DSensorCompose";

export type DSensorProps = {
  x: number;
  y: number;
  vm: DSensorCompose;
  default_color?: string;
  size?: number;
};

export default function DSensorView({
  x,
  y,
  vm,
  size = 12,
  default_color = "green",
}: DSensorProps) {
  const [state, setState] = useState<DSensorState>(vm.value);

  useEffect(() => {
    vm.connect(() => {
      setState(vm.value);
    });
  }, []);

  console.log("dsv render");
  const color = get_color(state, default_color);
  return (
    <Sensor
      x={x}
      y={y}
      size={size}
      color={color}
      onClick={() => vm.on_click()}
    />
  );
}

function get_color(st: DSensorState, default_color: string): string {
  if (st.is_block) return "gray";
  if (st.is_error) return "red";
  if (st.is_state) return default_color;
  return "yellow";
}
