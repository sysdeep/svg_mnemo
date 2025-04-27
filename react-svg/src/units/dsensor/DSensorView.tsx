import { useEffect, useState } from "react";
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

  return (
    <g onClick={() => ctrl.on_click()}>
      <Lamp
        x={x}
        y={y}
        size={size}
        color={default_color}
        state={state.is_state}
      />
    </g>
  );
}
