import { useState } from "react";
import DevMnemoDefs from "./components/DevMnemoDefs";
import Button from "./components/Button";
import VibroTray from "../../../core/views/vibro_tray/vibro_tray";

export default function VibroTrayPage() {
  return (
    <div>
      <Mnemo />
    </div>
  );
}

function Mnemo() {
  const [hbState, setHbState] = useState<boolean>(false);

  return (
    <svg width={600} height={600} viewBox="0 0 600 600">
      <DevMnemoDefs />

      <VibroTray x={20} y={20} active={hbState} />

      <g transform="scale(2)">
        <VibroTray x={10} y={40} active={hbState} />
      </g>

      <Button x={80} y={20} onClick={() => setHbState((st) => !st)}>
        toggle on/off
      </Button>
    </svg>
  );
}
