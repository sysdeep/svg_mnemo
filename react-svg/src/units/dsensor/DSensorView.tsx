import { useEffect, useState } from "react";
import Sensor from "../../views/Sensor";
import DSensorCompose, { DSensorState } from "./DSensorCompose";
import Lamp from "../../views/lamp/Lamp";
import { LampColor } from "../../views/lamp/lamp_color";

export type DSensorProps = {
  x: number;
  y: number;
  ctrl: DSensorCompose;
  default_color?: LampColor;
  size?: number;
};

export default function DSensorView({
  x,
  y,
  ctrl,
  size = 12,
  default_color = LampColor.green,
}: DSensorProps) {
  const [state, setState] = useState<DSensorState>(ctrl.value);

  useEffect(() => {
    ctrl.connect(() => {
      setState(ctrl.value);
    });
  }, []);

  console.log("dsv render");
  // const color = get_color(state, default_color);
  return (
    <Lamp
      x={x}
      y={y}
      size={size}
      color={default_color}
      state={state.is_state}
    />

    // <Sensor
    //   x={x}
    //   y={y}
    //   size={size}
    //   color={color}
    //   onClick={() => ctrl.on_click()}
    // />
  );
}

function get_color(st: DSensorState, default_color: string): string {
  if (st.is_block) return "gray";
  if (st.is_error) return "red";
  if (st.is_state) return default_color;
  return "yellow";
}
