export type ProtoAttr = {
  attr_id: number;
  name: string;
  sname: string;
  vtype: string;
  description: string;
  value: any;
};

export type Proto = {
  proto_id: string;
  name: string;
  description: string;
  icon: string;
  attrs: ProtoAttr[];
};

export type Object = {
  description: string;
  name: string;
  obj_id: string;
  plc_id: string;
  proto_code: string;
  //   proto_name: string;
  sname: string;
  sys_id: string;
  tree_level: number;
  tree_lk: number;
  tree_rk: number;
  //   possible_values: [];
  //   plc_observers: [];
  attrs_values: { [key: string]: any };
};

type Body = {
  objects: Object[];
};

export type ProjectFile = {
  protos: Proto[];
  body: Body;
};
