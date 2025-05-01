import Attr from "../../core/models/attrs/Attr";
import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";

enum Attrs {}

export default class GenericModel extends BaseModel {
  public static Attrs = Attrs;
  public static PROTO_NAME = "Generic";

  constructor(sys_id: string, attrs_list: Attr<any>[]) {
    super(sys_id, attrs_list);
  }
}
