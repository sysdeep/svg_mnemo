export type PackageOdata = {
  sys_id: string;
  attrs: AttrPayload[];
};

export type AttrPayload = {
  attr_id: number;
  value: any;
};
