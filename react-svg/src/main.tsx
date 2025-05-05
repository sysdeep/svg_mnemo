// vendors
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "winbox/dist/css/winbox.min.css"; // required
import "winbox/dist/css/themes/modern.min.css"; // optional

// import "./index.css";
import App from "./App.tsx";
import { ProjectContext } from "./ProjectContext.ts";
import { make_project } from "./projects/spb_upl/loader.ts";
import "./bootstrap_tree.css";
import {
  ObjectsModalContext,
  ObjectsModalContextProvider,
} from "./contexts/ObjectsModalContext";
import ObjectsModalManager from "./projects/spb_upl/ObjectsModalManager.tsx";

async function main(): Promise<any> {
  const resp = await fetch("/project.json");
  const project_data = await resp.json();
  console.log(project_data);

  return project_data;
}

main().then((project_data) => {
  // make project
  const project = make_project(project_data);
  console.log(project);

  // draw
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ProjectContext.Provider value={project}>
        <ObjectsModalContextProvider>
          <App />
          <ObjectsModalManager />
        </ObjectsModalContextProvider>
      </ProjectContext.Provider>
    </StrictMode>
  );
});
