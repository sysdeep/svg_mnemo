import { useEffect, useState } from "react";
import MotorCompose, { MotorState } from "./MotorCompose";
import DSensorNormalView from "../dsensor/DSensorNormalView";

export type MotorParams = {
  x: number;
  y: number;
  vm: MotorCompose;
};

export default function MotorView(params: MotorParams) {
  const sensors_view = params.vm.sensors.map((sc, i) => {
    const x = params.x + i * 14;
    const y = params.y;
    return <DSensorNormalView x={x} y={y} vm={sc} key={i} size={8} />;
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

  const color = get_color(state);

  return (
    <g>
      <rect x={x} y={y} width={40} height={20} rx={4} fill={color} />;
      <Rotor x={x + 10} y={y} logic_st={state.logic} />
    </g>
  );
}

type RotorProps = {
  x: number;
  y: number;
  logic_st: number;
};
function Rotor({ x, y, logic_st }: RotorProps) {
  return (
    <g>
      <rect x={x} y={y} width={20} height={20} fill="purple" />
    </g>
  );
}

function get_color(st: MotorState): string {
  if (st.is_block) return "gray";

  if (st.is_error) return "red";

  return "brown";
}
