import Attr from "../../core/models/attrs/Attr";
import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

// export type DSensorAttrs = {
//   logic: number;
//   block: boolean;
// };

enum Attrs {
  state = 1,
  error = 2,
  block = 3,
}

export default class DSensorModel extends BaseModel {
  public static Attrs = Attrs;
  public static PROTO_NAME = "DSensor";

  constructor(
    project: ProjectInterface,
    proto_spec: ProtoSpec,
    object_spec: ObjectSpec
  ) {
    super(project, proto_spec, object_spec);
    // let attrs_list = [
    //   new Attr<boolean>(Attrs.state, false), // state
    //   new Attr<boolean>(Attrs.error, false), // error
    //   new Attr<boolean>(Attrs.block, false), // block
    // ];
    // super(sys_id, attrs_list);
  }

  public set_error(value: boolean) {
    this.get_attr(Attrs.error)?.set_value(value);
  }
}
