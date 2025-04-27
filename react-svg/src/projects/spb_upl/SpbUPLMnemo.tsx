// type Props = {};

import { useState } from "react";
import { BlueGray } from "../../core/nui/lib/palette";
import Lamp from "../../views/lamp/Lamp";
import WarehouseArea from "./nui/warehouse_area/WarehouseArea";
import LampGradients from "../../views/lamp/LampGradients";
import { colors_list, LampColor } from "../../views/lamp/lamp_color";
import MainGradient from "../../views/common/MainGradient";
import BunkerGradients from "../../views/bunker/BunkerGradients";
import warehouse_area_composer from "./composers/warehouse_area_composer";
import BaseModel from "../../core/models/BaseModel";

export default function SpbUPLMnemo() {
  const max_width = 1280;
  const max_height = 960;

  const root_model = new BaseModel([]);

  const wh_area_ctrl = warehouse_area_composer(root_model);

  return (
    // <svg viewBox="0 0 800 600" width={800} height={600} fill="gray">
    <svg width={max_width} height={max_height} fill="gray">
      <defs>
        <MainGradient />
        <BunkerGradients />
        <LampGradients />
      </defs>

      <rect width={max_width} height={max_height} fill={BlueGray.p200} />
      {/* <MainSupplyView x={100} y={100} vm={app_model.main_supply} /> */}
      {/* <MotorView x={160} y={150} vm={app_model.motor} /> */}
      {/* <PaletteGrid x={0} y={0} /> */}
      {/* <Belt x={100} y={200} /> */}
      {/* <Belt x={100} y={250} />          <Belt x={100} y={300} /> */}
      {/* <VibroTray x={100} y={250} /> */}

      <WarehouseArea x={20} y={20} ctrl={wh_area_ctrl} />

      {[...colors_list].map((c, i) => {
        return <ComplexLamp x={100 + i * 40} y={70} color={c} key={i} />;
      })}
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
