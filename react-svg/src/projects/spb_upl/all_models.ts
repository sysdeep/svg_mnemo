import AbstractObjectModel from "../../core/models/AbstractObjectModel";
import DSensorModel from "../../core/models/DSensorModel";
import ModelInterface from "../../core/models/ModelInterface";
import ProjectInterface from "../../core/project/project_interface";

// export const all_models = [DSensorModel, AbstractObjectModel];

// export const all_models_2: Array<typeof BaseModel> = [
// export const all_models: (typeof BaseModel)[] = [

export interface ModelInterfaceConstructor {
  new (project: ProjectInterface, sys_id: string): ModelInterface;
}

// export const all_models: (typeof ModelInterface)[] = [
// export const all_models: ModelInterfaceConstructor[] = [
//   DSensorModel,
//   AbstractObjectModel,
// ];

export type ProtosMap = { [key: string]: ModelInterfaceConstructor };

export const models_map: ProtosMap = {
  [DSensorModel.PROTO_NAME]: DSensorModel,
  [AbstractObjectModel.PROTO_NAME]: AbstractObjectModel,
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
