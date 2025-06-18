// vendors
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.min.css";

import "winbox/dist/css/winbox.min.css"; // required
import "winbox/dist/css/themes/modern.min.css"; // optional
import "@fontsource/ubuntu/400.css"; // Defaults to weight 400

// self -----------------------------------------------------------------------
import "./index.css";
import { ProjectContext } from "./ProjectContext.ts";
import "./bootstrap_tree.css";
import ObjectsModalManager from "./core/gui/object_modals/ObjectModalsManager.tsx";
import App from "./apps/app/App.tsx";
import ProjectInterface from "./core/project/project_interface.ts";
import GModalsManager from "./core/gui/gmodals/gmodals_manager/GModalsManager.tsx";
import GModalsMap from "./apps/app/modules/gmodals/gmodals_map.tsx";
import { make_project } from "./apps/app/modules/project/project_constructor.ts";

async function prepare_project(): Promise<ProjectInterface> {
  const resp = await fetch("/project.json");
  const project_data = await resp.json();

  return make_project(project_data);
}

// main().then((project_data) => {
//   // make project
//   const project = make_project(project_data);

//   // draw
//   createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//       <ProjectContext.Provider value={project}>
//         <App />
//         <ObjectsModalManager />
//       </ProjectContext.Provider>
//     </StrictMode>
//   );
// });

// NOTE: загружается 2 раза если компонент будет обёрнут в StrictMode
createRoot(document.getElementById("root")!).render(<MainApp />);

function MainApp() {
  const [project, setProject] = useState<ProjectInterface | null>(null);

  useEffect(() => {
    if (!project) {
      prepare_project().then((project) => {
        setProject(project);
      });
    }
  }, []);

  if (!project) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProjectContext.Provider value={project}>
      <StrictMode>
        <App />
        <ObjectsModalManager />
        <GModalsManager modals_map={GModalsMap} />
      </StrictMode>
    </ProjectContext.Provider>
  );
}
