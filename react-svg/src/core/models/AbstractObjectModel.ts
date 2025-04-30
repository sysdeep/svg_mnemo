import Attr from "../../core/models/attrs/Attr";
import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";

enum Attrs {}

export default class AbstractObjectModel extends BaseModel {
  public static Attrs = Attrs;
  public static PROTO_NAME = "AbstractObject";

  constructor(project: ProjectInterface, sys_id: string) {
    let attrs_list: Attr<any>[] = [];
    super(project, sys_id, attrs_list);
  }
}
