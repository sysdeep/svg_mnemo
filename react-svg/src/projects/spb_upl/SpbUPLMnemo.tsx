import { useContext } from "react";
import { BlueGray } from "../../core/nui/lib/palette";
import { ProjectContext } from "../../ProjectContext";
import MainGradient from "../../core/views/common/MainGradient";
import BunkerGradients from "../../core/views/bunker/BunkerGradients";
import LampGradients from "../../core/views/lamp/LampGradients";
import MainColorizeFilters from "../../core/views/common/MainColorizeFilters";
import BarHud from "./bar_hud/BarHud";
import upload_system_composer from "./composers/upload_system_composer";
import UploadSystem from "./nui/upload_system/UploadSystem";
// import ObjErrorsModal from "../../core/nui/components/obj_errors_modal/ObjErrorsModal";

export default function SpbUPLMnemo() {
  const max_width = 1280;
  const max_height = 960;

  const project = useContext(ProjectContext);

  if (!project) {
    return <h2>No Project</h2>;
  }

  const upload_system = project.get_node("raw_materials_warehouse_control_system.inertUploadSystem");

  if (!upload_system) {
    return <h2>No Node</h2>;
  }

  const upload_system_ctrl = upload_system_composer(upload_system);

  return (
    <div>
      {/* <svg viewBox="0 0 800 600" width={800} height={600} fill="gray"> */}
      <svg width={max_width} height={max_height} fill="gray">
        <defs>
          <MainGradient />
          <BunkerGradients />
          <LampGradients />

          <MainColorizeFilters />

          {/* TODO: вынести в компоненты, используется в модале ошибки */}
          <filter id="shadow">
            {/* <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" /> */}
            <feDropShadow dx="1" dy="1" stdDeviation="1" />
          </filter>
        </defs>

        {/* background */}
        <rect width={max_width} height={max_height} fill={BlueGray.p200} />

        {/* top bar */}
        <BarHud x={0} y={0} width={max_width} />

        <UploadSystem x={0} y={80} max_width={max_width} ctrl={upload_system_ctrl} />

        {/* debug obj modal */}
        {/* <ObjErrorsModal x={30} y={200} /> */}
      </svg>
    </div>
  );
}
