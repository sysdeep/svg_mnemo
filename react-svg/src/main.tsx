import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProjectContext } from "./ProjectContext.ts";
import { make_project } from "./projects/spb_upl/loader.ts";

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
        <App />
      </ProjectContext.Provider>
    </StrictMode>
  );
});
