export type ObjectDef = {
  description: string;
  name: string;
  obj_id: string;
  plc_id: string;
  proto_code: string;
  proto_name: string;
  sname: string;
  sys_id: string;
  tree_level: number;
  tree_lk: number;
  tree_rk: number;
  //   possible_values: [];
  //   plc_observers: [];
  attrs_values: { [key: number]: any };
};
