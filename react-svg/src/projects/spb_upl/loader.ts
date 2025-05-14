import Project from "../../core/project/project";
import ProjectInterface from "../../core/project/project_interface";
import { ProjectSpec } from "../../core/project/project_spec";

export function make_project(project_data: ProjectSpec): ProjectInterface {
  // make project
  const pro = new Project(project_data);

  return pro;
}
