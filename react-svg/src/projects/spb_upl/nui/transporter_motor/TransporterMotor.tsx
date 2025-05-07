import { useEffect, useState } from "react";
import Motor from "../../../../views/motor/Motor";
import TransporterMotorCompose, { MotorState } from "./TransporterMotorCompose";
import DSensorNormalView from "../../../../units/dsensor/DSensorNormalView";

export type Props = {
  x: number;
  y: number;
  ctrl: TransporterMotorCompose;
};

export default function TransporterMotor({ x, y, ctrl }: Props) {
  const sensors_view = ctrl.sensors.map((sc, i) => {
    const sx = x + i * 14;
    const sy = y - 10;
    return <DSensorNormalView x={sx} y={sy} ctrl={sc} key={i} size={8} />;
  });

  return (
    <g>
      {/* self */}
      <TransporterMotorVM x={x} y={y} ctrl={ctrl} />
      {/* <MotorViewInner {...params} /> */}
      {sensors_view}
      {/* <DSensorNormalView x={x} y={y} vm={sc} key={i} size={8} /> */}
    </g>
  );
}

function TransporterMotorVM({ x, y, ctrl }: Props) {
  const [state, setState] = useState<MotorState>(ctrl.value);

  useEffect(() => {
    const on_state = () => setState(ctrl.value);
    ctrl.connect(on_state);
    return () => ctrl.disconnect(on_state);
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
      <Motor x={x} y={y} is_active={false} />
    </g>
  );
}

// // function get_color(st: MotorState): string {
// //   if (st.is_block) return "gray";

// //   if (st.is_error) return "red";

// //   return "brown";
// // }
