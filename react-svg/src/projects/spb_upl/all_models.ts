import AbstractObjectModel from "../../core/models/AbstractObjectModel";
import BaseModel from "../../core/models/BaseModel";
import DSensorModel from "../../core/models/DSensorModel";
import ModelInterface from "../../core/models/ModelInterface";

// export const all_models = [DSensorModel, AbstractObjectModel];

// export const all_models_2: Array<typeof BaseModel> = [
// export const all_models: (typeof BaseModel)[] = [

export interface ModelInterfaceConstructor {
  new (...args: any[]): ModelInterface;
}

// export const all_models: (typeof ModelInterface)[] = [
export const all_models: ModelInterfaceConstructor[] = [
  DSensorModel,
  AbstractObjectModel,
];


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
 * /