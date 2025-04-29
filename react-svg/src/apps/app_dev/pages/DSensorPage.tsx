import { useState } from "react";
import LampGradients from "../../../views/lamp/LampGradients";
import { colors_list, LampColor } from "../../../views/lamp/lamp_color";
import Lamp from "../../../views/lamp/Lamp";
import MainColorizeFilters from "../../../views/common/MainColorizeFilters";
import MainGradient from "../../../views/common/MainGradient";
import BunkerGradients from "../../../views/bunker/BunkerGradients";

// type MotorState = {
//   is_logic: boolean;
// };

export default function DSensorPage() {
  // const [mstate, setMstate] = useState<MotorState>({ is_logic: false });

  // const on_action = (act: Action) => {
  //   if (act == Action.start) {
  //     return setMstate({ ...mstate, is_logic: true });
  //   }
  //   if (act == Action.stop) {
  //     return setMstate({ ...mstate, is_logic: false });
  //   }
  // };

  return (
    <div>
      <Mnemo />
      {/* <Controls on_action={on_action} /> */}
    </div>
  );
}

function Mnemo() {
  return (
    <svg width={600} height={600} viewBox="0 0 400 400">
      <defs>
        <MainGradient />
        <BunkerGradients />
        <LampGradients />

        <MainColorizeFilters />
      </defs>

      <g>
        {[...colors_list].map((c, i) => {
          return <ComplexLamp x={10 + i * 40} y={10} color={c} key={i} />;
        })}
      </g>
    </svg>
  );
}

function ComplexLamp({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color: LampColor;
}) {
  const [st, setSt] = useState<boolean>(false);
  return (
    <g onClick={() => setSt(!st)}>
      <Lamp x={x} y={y} color={color} size={36} state={st} />
    </g>
  );
}
