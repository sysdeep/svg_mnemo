export type ProtoSpecAttr = {
  attr_id: number;
  name: string;
  sname: string;
  vtype: string;
  description: string;
  value: any;
};

export type ProtoSpec = {
  proto_id: string;
  name: string;
  description: string;
  icon: string;
  attrs: ProtoSpecAttr[];
};

export type ObjectSpec = {
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

export type LinkSpec = {
  from: string;
  to: string;
};

type Body = {
  name: string;
  description: string;
  objects: ObjectSpec[];
  links: LinkSpec[];
};

export type ProjectSpec = {
  protos: ProtoSpec[];
  body: Body;
};
