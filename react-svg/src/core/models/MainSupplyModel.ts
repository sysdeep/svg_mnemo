import { AbstractActionObjModel } from "./AbstractActionObjModel";

export const Attrs = {
  //   ...AttrsBase,
  //   mnemo_name: 51, // vtype: string,   access: 7 --dwr,  name: Название на мнемосхеме
  //   using_mnemo_name: 52, // vtype: int,      access: 3 ---wr,  name: Использовать название мнемосхемы
  //   ...TransmitterAttrs,
};

export const MainSupplyModelProtoName = "MainSupply";

export class MainSupplyModel extends AbstractActionObjModel {
  proto_name: string = MainSupplyModelProtoName;

  //   constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
  //     super(project, proto_spec, object_spec);
  //   }
}
