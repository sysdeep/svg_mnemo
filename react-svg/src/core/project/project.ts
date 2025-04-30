import ModelInterface from "../models/ModelInterface";
import ProjectInterface from "./project_interface";

export default class Project implements ProjectInterface {
  get_objects(): ModelInterface[] {
    return [];
  }
  get_object(sys_id: string): ModelInterface | null {
    return null;
  }
}
