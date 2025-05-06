import { useState } from "react";
import ModelInterface from "../../../core/models/ModelInterface";
import ObjectFrame from "../../../core/gui/object_frame/ObjectFrame";
import ProjectTree from "./tree_frame/ProjectTree";

// TODO: global render
// TODO: визуально - долго рендерится... в консоли по клику моментально, а отображается визуально через секунду

export default function ProjectFrame() {
  const [obj, setObj] = useState<ModelInterface | null>(null);

  const on_object_selected = (obj: ModelInterface) => setObj(obj);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <ProjectTree on_selected={on_object_selected} />
        </div>
        <div className="col-6">
          {obj && <ObjectFrame obj={obj} />}
          {!obj && <p>no obj</p>}
        </div>
      </div>
    </div>
  );
}
