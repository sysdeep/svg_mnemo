import { useState } from "react";
import Motor from "../../../core/views/motor/Motor";
import DevMnemoDefs from "./components/DevMnemoDefs";

type MotorState = {
  is_logic: boolean;
};

export default function MotorPage() {
  const [mstate, setMstate] = useState<MotorState>({ is_logic: false });

  const on_action = (act: Action) => {
    if (act == Action.start) {
      return setMstate({ ...mstate, is_logic: true });
    }
    if (act == Action.stop) {
      return setMstate({ ...mstate, is_logic: false });
    }
  };

  return (
    <div>
      <Mnemo is_logic={mstate.is_logic} />
      <Controls on_action={on_action} />
    </div>
  );
}

function Mnemo({ is_logic }: MotorState) {
  return (
    <svg width={600} height={600} viewBox="0 0 50 50">
      <DevMnemoDefs />

      <Motor x={10} y={10} is_active={is_logic} />
    </svg>
  );
}

enum Action {
  start,
  stop,
}

type ActionHandler = (act: Action) => void;

function Controls({ on_action }: { on_action: ActionHandler }) {
  return (
    <ul>
      <li>
        <button onClick={() => on_action(Action.start)}>Start</button>
      </li>
      <li>
        <button onClick={() => on_action(Action.stop)}>Stop</button>
      </li>
    </ul>
  );
}
