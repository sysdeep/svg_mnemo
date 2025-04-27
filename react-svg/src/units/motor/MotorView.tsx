import { useEffect, useState } from "react";
import MotorCompose, { MotorState } from "./MotorCompose";
import DSensorNormalView from "../dsensor/DSensorNormalView";
import Motor from "../../views/motor/Motor";

export type MotorParams = {
  x: number;
  y: number;
  vm: MotorCompose;
};

export default function MotorView(params: MotorParams) {
  const sensors_view = params.vm.sensors.map((sc, i) => {
    const x = params.x + i * 14;
    const y = params.y;
    return <DSensorNormalView x={x} y={y} ctrl={sc} key={i} size={8} />;
  });

  return (
    <g>
      <MotorViewInner {...params} />
      {sensors_view}
    </g>
  );
}

function MotorViewInner({ x, y, vm }: MotorParams) {
  const [state, setState] = useState<MotorState>(vm.value);

  useEffect(() => {
    vm.connect(() => {
      setState(vm.value);
    });
  }, []);

  useEffect(() => {
    if (state.logic > 0) {
      // start animation
    } else {
      // stop animation
    }
  }, [state.logic]);

  // const color = get_color(state);

  return (
    <g>
      <Motor x={x} y={y} />
    </g>
  );
}

// function get_color(st: MotorState): string {
//   if (st.is_block) return "gray";

//   if (st.is_error) return "red";

//   return "brown";
// }
