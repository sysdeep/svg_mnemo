import { useState } from "react";
import DevMnemoDefs from "./components/DevMnemoDefs";
import Button from "./components/Button";
import PLC from "../../../core/views/remote_devices/plc/PLC";

export default function PLCPage() {
  return (
    <div>
      <Mnemo />
      {/* <Controls on_action={on_action} /> */}
    </div>
  );
}

function Mnemo() {
  const [hbState, setHbState] = useState<boolean>(false);
  return (
    <svg width={600} height={600} viewBox="0 0 600 600">
      <DevMnemoDefs />

      <PLC x={20} y={20} hb_state={hbState} />

      <Button x={80} y={20} onClick={() => setHbState((st) => !st)}>
        HB
      </Button>
    </svg>
  );
}
