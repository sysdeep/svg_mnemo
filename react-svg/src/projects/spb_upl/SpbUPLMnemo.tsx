// type Props = {};

import { useContext, useState } from "react";
import { BlueGray } from "../../core/nui/lib/palette";
import WarehouseArea from "./nui/warehouse_area/WarehouseArea";
import warehouse_area_composer from "./composers/warehouse_area_composer";
import { ProjectContext } from "../../ProjectContext";
import MainGradient from "../../core/views/common/MainGradient";
import BunkerGradients from "../../core/views/bunker/BunkerGradients";
import LampGradients from "../../core/views/lamp/LampGradients";
import MainColorizeFilters from "../../core/views/common/MainColorizeFilters";

export default function SpbUPLMnemo() {
  const max_width = 1280;
  const max_height = 960;

  const project = useContext(ProjectContext);

  if (!project) {
    return <h2>No Project</h2>;
  }

  // const project = new Project();
  // const warehouse_node = new AbstractObjectModel(project, "warehouse_area");
  const warehouse_node = project.get_node(
    "raw_materials_warehouse_control_system.inertUploadSystem.stuffWarehouseArea"
  );

  if (!warehouse_node) {
    return <h2>No Node</h2>;
  }

  const wh_area_ctrl = warehouse_area_composer(warehouse_node);

  return (
    // <svg viewBox="0 0 800 600" width={800} height={600} fill="gray">
    <svg width={max_width} height={max_height} fill="gray">
      <defs>
        <MainGradient />
        <BunkerGradients />
        <LampGradients />

        <MainColorizeFilters />
      </defs>

      {/* background */}
      <rect width={max_width} height={max_height} fill={BlueGray.p200} />

      <WarehouseArea x={max_width - 460} y={20} ctrl={wh_area_ctrl} />
    </svg>
  );
}
