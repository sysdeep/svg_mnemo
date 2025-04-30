export type PrototypeAttr = {
  attr_id: number;
  name: string;
  sname: string;
  vtype: string;
  description: string;
};

export type Prototype = {
  proto_id: string;
  name: string;
  description: string;
  icon: string;
  attrs: PrototypeAttr[];
};

/*

*/
