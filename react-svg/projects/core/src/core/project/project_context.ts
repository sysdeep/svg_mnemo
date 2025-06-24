import { createContext, useContext } from "react";
import ProjectInterface from "./project_interface";

/**
 * контекст содержащий главный объект проекта
 */
export const ProjectContext = createContext<ProjectInterface | null>(null);

export function useProjectContext(): ProjectInterface | null {
  return useContext(ProjectContext);
}
