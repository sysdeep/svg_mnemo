import { AbstractActionObjModel, Attrs as AttrsBase, Cmd as CmdBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,
};

export const Cmd = {
  ...CmdBase,
  no_cmd: 0, // Нет команды
  confirm_error: 1, // Подверждение ошибки
  block: 2, // Заблокировать
  unblock: 3, // Разблокировать
};

export const SensorControllerProtoName = "SensorController";

export class SensorController extends AbstractActionObjModel {
  proto_name: string = SensorControllerProtoName;
}
