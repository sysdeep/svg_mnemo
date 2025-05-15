import { useState } from "react";
import DevMnemoDefs from "./components/DevMnemoDefs";
import Server from "../../../core/views/remote_devices/server/Server";
import Button from "./components/Button";

export default function ServerPage() {
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

      <Server x={20} y={20} hb_state={hbState} />

      <Button x={80} y={20} onClick={() => setHbState((st) => !st)}>
        HB
      </Button>
    </svg>
  );
}
