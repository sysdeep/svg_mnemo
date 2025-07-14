import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { AbstractActionObjModel, Attrs as AttrsBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,

  on_time: 6, // vtype: int,      access: 15 -sdwr, name: Время во включенном состоянии, мс
  off_time: 7, // vtype: int,      access: 15 -sdwr, name: Время в выключенном состоянии, мс
  repeats: 8, // vtype: int,      access: 15 -sdwr, name: Количество повторов
  cur_repeats_num: 9, // vtype: int,      access: 1 ----r,  name: Текущее число повторений в рамках цикла
};

export const BellProtoName = "Bell";

export class Bell extends AbstractActionObjModel {
  proto_name: string = BellProtoName;
  public static Attrs = Attrs;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}

// TODO
/*

class Cmd(object):
    """список кодов cmd"""
    NoCMD			= 0		#!< desription: Нет команды
    ConfirmError	= 1		#!< desription: Подверждение ошибки
    SetBlock		= 2		#!< desription: Заблокировать
    Unblock			= 3		#!< desription: Разблокировать
    TurnOff			= 4		#!< desription: Выключить
    TurnOn			= 5		#!< desription: Включить
    RunCycle		= 6		#!< desription: Отработать цикл
    CancelCycle		= 7		#!< desription: Отменить цикл




class Iattr(object):
    """объект, сожержащий интерфейс отсылки атрибутов"""
    @staticmethod
    def on_time(model, value):
        model.simple_mset_send(Attr.on_time, value)

    @staticmethod
    def off_time(model, value):
        model.simple_mset_send(Attr.off_time, value)

    @staticmethod
    def repeats(model, value):
        model.simple_mset_send(Attr.repeats, value)


class Icmd:
    @staticmethod
    def TurnOff(model: AbstractActionObj):
        """Выключить"""
        model.simple_cmd_send([(Attr.cmd, Cmd.TurnOff)], message="выключить")

    @staticmethod
    def TurnOn(model):
        """Включить"""
        model.simple_cmd_send([(Attr.cmd, Cmd.TurnOn)], message="включить")

    @staticmethod
    def RunCycle(model):
        """Отработать цикл"""
        model.simple_cmd_send([(Attr.cmd, Cmd.RunCycle)], message="отработать цикл")


    @staticmethod
    def SetBlock(model):
        """Заблокировать"""
        model.simple_cmd_send([(Attr.cmd, Cmd.SetBlock)], message="{}: заблокировать".format(model.sname))

    @staticmethod
    def Unblock(model):
        """Разблокировать"""
        model.simple_cmd_send([(Attr.cmd, Cmd.Unblock)], message="{}: разблокировать".format(model.sname))



*/
