import ModelInterface from "../models/ModelInterface";

export default interface ProjectInterface {
  get_objects(): ModelInterface[];
  get_object(sys_id: string): ModelInterface | null;
}
