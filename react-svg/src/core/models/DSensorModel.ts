import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

export const Attrs = {
  control: 1,
  block: 2,
  error_type: 3,
  state: 4,
  inverted_logic: 5,
  use_in_logic: 6,
  can_change_control_user_mask: 100, // int,      access: 7 --dwr,  name: Кто может снимать контроль?
  plc_log: 997, // string,   access: 1 ----r,  name: Сообщение от ПЛК
  warning: 1000,
};

export const DSensorModelProtoName = "DSensor";

export class DSensorModel extends BaseModel {
  proto_name: string = DSensorModelProtoName;
  public static Attrs = Attrs;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
    // let attrs_list = [
    //   new Attr<boolean>(Attrs.state, false), // state
    //   new Attr<boolean>(Attrs.error, false), // error
    //   new Attr<boolean>(Attrs.block, false), // block
    // ];
    // super(sys_id, attrs_list);
  }
}
