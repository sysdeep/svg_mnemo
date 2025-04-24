// type Props = {};

import { BlueGray } from "../../core/nui/lib/palette";
import WarehouseArea from "./nui/warehouse_area/WarehouseArea";

export default function SpbUPLMnemo() {
  const max_width = 1280;
  const max_height = 960;
  return (
    // <svg viewBox="0 0 800 600" width={800} height={600} fill="gray">
    <svg width={max_width} height={max_height} fill="gray">
      <rect width={max_width} height={max_height} fill={BlueGray.p200} />
      {/* <MainSupplyView x={100} y={100} vm={app_model.main_supply} /> */}
      {/* <MotorView x={160} y={150} vm={app_model.motor} /> */}
      {/* <PaletteGrid x={0} y={0} /> */}
      {/* <Belt x={100} y={200} /> */}
      {/* <Belt x={100} y={250} />
          <Belt x={100} y={300} /> */}
      {/* <VibroTray x={100} y={250} /> */}
      <WarehouseArea x={20} y={20} />
    </svg>
  );
}
