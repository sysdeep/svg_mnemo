import { createContext } from "react";

export const ProjectContext = createContext({});

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
