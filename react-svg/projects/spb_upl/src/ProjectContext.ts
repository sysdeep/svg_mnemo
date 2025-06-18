import { createContext } from "react";
import ProjectInterface from "./core/project/project_interface";

export const ProjectContext = createContext<ProjectInterface | null>(null);

// export function useProjectContext() {
//   const get_project = () => {
//     fetch("/project.json").then((resp) => {
//       resp.json().then((data) => {
//         console.log(data);
//       });
//     });
//   };

//   return {
//     get_project,
//   };
// }
