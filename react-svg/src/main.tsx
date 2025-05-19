// vendors
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.min.css";

import "winbox/dist/css/winbox.min.css"; // required
import "winbox/dist/css/themes/modern.min.css"; // optional
import "@fontsource/ubuntu/400.css"; // Defaults to weight 400

// self -----------------------------------------------------------------------
import "./index.css";
import { ProjectContext } from "./ProjectContext.ts";
import { make_project } from "./projects/spb_upl/loader.ts";
import "./bootstrap_tree.css";
import ObjectsModalManager from "./projects/spb_upl/ObjectsModalManager.tsx";
import App from "./apps/app/App.tsx";

async function main(): Promise<any> {
  const resp = await fetch("/project.json");
  const project_data = await resp.json();
  console.log("fetch");

  return project_data;
}

main().then((project_data) => {
  // make project
  const project = make_project(project_data);

  // draw
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ProjectContext.Provider value={project}>
        <App />
        <ObjectsModalManager />
      </ProjectContext.Provider>
    </StrictMode>
  );
});

// NOTE: загружается 2 раза...
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <MainApp />
//   </StrictMode>
// );

// function MainApp() {
//   console.log("MainApp");
//   const [project, setProject] = useState<ProjectInterface | null>(null);

//   useEffect(() => {
//     console.log("mount", project);
//     if (!project) {
//       main().then((project_data) => {
//         // make project
//         const project = make_project(project_data);

//         setProject(project);
//       });
//     }
//   }, []);

//   if (!project) {
//     return <h1>Loading</h1>;
//   }

//   return (
//     <ProjectContext.Provider value={project}>
//       <App />
//       <ObjectsModalManager />
//     </ProjectContext.Provider>
//   );
// }
