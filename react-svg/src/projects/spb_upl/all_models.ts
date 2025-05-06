import AbstractActionObjModel, {
  AbstractActionObjModelProtoName,
} from "../../core/models/AbstractActionObjModel";
import AbstractObjectModel, {
  AbstractObjectModelProtoName,
} from "../../core/models/AbstractObjectModel";
import BeltTransporterModel, {
  BeltTransporterModelProtoName,
} from "../../core/models/BeltTransporterModel";
import DSensorModel, {
  DSensorModelProtoName,
} from "../../core/models/DSensorModel";
import GenericModel, {
  GenericModelProtoName,
} from "../../core/models/GenericModel";
import ModelInterface from "../../core/models/ModelInterface";
import ProjectInterface from "../../core/project/project_interface";
import { ObjectSpec, ProtoSpec } from "../../core/project/project_spec";

export interface ModelInterfaceConstructor {
  new (
    project: ProjectInterface,
    proto_spec: ProtoSpec,
    object_spec: ObjectSpec
  ): ModelInterface;
}

export type ProtosMap = { [key: string]: ModelInterfaceConstructor };

/**
 * карта всех классов моделей используемых в проекте
 */
export const models_map: ProtosMap = {
  [GenericModelProtoName]: GenericModel,
  [DSensorModelProtoName]: DSensorModel,
  [AbstractObjectModelProtoName]: AbstractObjectModel,
  [BeltTransporterModelProtoName]: BeltTransporterModel,
  [AbstractActionObjModelProtoName]: AbstractActionObjModel,
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
