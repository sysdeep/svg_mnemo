import { AbstractModel, AbstractModelProtoName } from "@src/core/models/AbstractModel";
import {
  AbstractActionObjModel,
  AbstractActionObjModelProtoName,
} from "../../../../core/models/AbstractActionObjModel";
import { AbstractArrayModel, AbstractArrayModelProtoName } from "../../../../core/models/AbstractArrayModel";
import { AbstractObjectModel, AbstractObjectModelProtoName } from "../../../../core/models/AbstractObjectModel";
import { BeltTransporterModel, BeltTransporterModelProtoName } from "../../../../core/models/BeltTransporterModel";
import { BunkerModel, BunkerModelProtoName } from "../../../../core/models/BunkerModel";
import { DSensorModel, DSensorModelProtoName } from "../../../../core/models/DSensorModel";
import { GenericModel, GenericModelProtoName } from "../../../../core/models/GenericModel";
import { GenericMotorModel, GenericMotorModelProtoName } from "../../../../core/models/GenericMotorModel";
import { InertUploadSystem, InertUploadSystemProtoName } from "../../../../core/models/InertUploadSystem";
import ModelInterface from "../../../../core/models/ModelInterface";
import { SimpleVibroTrayModel, SimpleVibroTrayModelProtoName } from "../../../../core/models/SimpleVibroTrayModel";
import { WH_LineModel, WH_LineModelProtoName } from "../../../../core/models/WH_LineModel";
import ProjectInterface from "../../../../core/project/project_interface";
import { ObjectSpec, ProtoSpec } from "../../../../core/project/project_spec";
import { ProtoClassMap } from "@src/core/project/objects_factory";
import {
  NwayMotorizedDustributionHopper,
  NwayMotorizedDustributionHopperProtoName,
} from "@src/core/models/NwayMotorizedDustributionHopper";
import { FBunkerStorageCommon, FBunkerStorageCommonProtoName } from "@src/core/models/FBunkerStorageCommon";
import { FBunkerStorage, FBunkerStorageProtoName } from "@src/core/models/FBunkerStorage";

export interface ModelInterfaceConstructor {
  new (project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec): ModelInterface;
}

/**
 * карта всех классов моделей используемых в проекте
 */
export const models_map: ProtoClassMap = {
  [AbstractActionObjModelProtoName]: AbstractActionObjModel,
  [AbstractArrayModelProtoName]: AbstractArrayModel,
  [AbstractModelProtoName]: AbstractModel,
  [AbstractObjectModelProtoName]: AbstractObjectModel,
  [BeltTransporterModelProtoName]: BeltTransporterModel,
  [BunkerModelProtoName]: BunkerModel,
  [DSensorModelProtoName]: DSensorModel,
  [FBunkerStorageCommonProtoName]: FBunkerStorageCommon,
  [FBunkerStorageProtoName]: FBunkerStorage,
  [GenericModelProtoName]: GenericModel,
  [GenericMotorModelProtoName]: GenericMotorModel,
  [InertUploadSystemProtoName]: InertUploadSystem,
  [NwayMotorizedDustributionHopperProtoName]: NwayMotorizedDustributionHopper,
  [SimpleVibroTrayModelProtoName]: SimpleVibroTrayModel,
  [WH_LineModelProtoName]: WH_LineModel,
  // [MainSupplyModelProtoName]: MainSupplyModel,
  // [PowerSupplyControllerProtoName]: PowerSupplyController,
};

/**
 * как в typescript объявить список содержащий классы заданного интерфейса
 * https://trychatgpt.ru/chat/681244b5ea53c0fd464d14b3
 * 
 * 
interface MyInterface {
  doSomething(): void;
}

interface MyInterfaceConstructor {
  new (...args: any[]): MyInterface;
}

class A implements MyInterface {
  doSomething() {
    console.log('A');
  }
}

class B implements MyInterface {
  doSomething() {
    console.log('B');
  }
}

const classes: MyInterfaceConstructor[] = [A, B];

for (const Cls of classes) {
  const instance = new Cls();
  instance.doSomething();
}
*/
