import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { AbstractActionObjModel, Attrs as AttrsBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,

  connection_status: 7, // vtype: int,      access: 1 ----r,  name: Статус соединения(true(<>0) or false(0))
  nominal_speed: 8, // vtype: int,      access: 1 ----r,  name: Номинальная скорость
  acc: 9, // vtype: int,      access: 3 ---wr,  name: Ускорение
  dec: 10, // vtype: int,      access: 3 ---wr,  name: Время торможения
  status: 11, // vtype: int,      access: 1 ----r,  name: Статус ПЧ
  speed_ref: 12, // vtype: int,      access: 1 ----r,  name: Заданная скорость
  out_speed: 13, // vtype: int,      access: 1 ----r,  name: Скорость на выходе ПЧ
  num_of_speeds: 14, // vtype: int,								Количество используемых скоростей
  current: 15, // vtype: int,      access: 1 ----r,  name: Ток
  voltage: 16, // vtype: int,      access: 1 ----r,  name: Напряжение
  torque: 17, // vtype: int,      access: 1 ----r,  name: Момент
  power: 18, // vtype: int,      access: 1 ----r,  name: Мощность
  speed1: 19, // vtype: int,      access: 7 --dwr,  name: Скорость1
  speed2: 20, // vtype: int,      access: 7 --dwr,  name: Скорость2
  speed3: 21, // vtype: int,      access: 7 --dwr,  name: Скорость3
  speed4: 22, // vtype: int,      access: 7 --dwr,  name: Скорость4
  speed5: 23, // vtype: int,      access: 7 --dwr,  name: Скорость5
  speed6: 24, // vtype: int,      access: 7 --dwr,  name: Скорость6
  cur_speed_num: 25, // int,      access: 3 ---wr,  name: Текущий номер скорости
};

export const AbstractFreqConvProtoName = "AbstractFreqConv";

export class AbstractFreqConv extends AbstractActionObjModel {
  proto_name: string = AbstractFreqConvProtoName;
  public static Attrs = Attrs;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
  }
}

// TODO
/*




class Iattr(IattrBase):
    """объект, сожержащий интерфейс отсылки атрибутов"""
    @staticmethod
    def acc(model, value):
        model.simple_mset_send(Attr.acc, value)

    @staticmethod
    def dec(model, value):
        model.simple_mset_send(Attr.dec, value)

    @staticmethod
    def speed1(model, value):
        model.simple_mset_send(Attr.speed1, value)

    @staticmethod
    def speed2(model, value):
        model.simple_mset_send(Attr.speed2, value)

    @staticmethod
    def speed3(model, value):
        model.simple_mset_send(Attr.speed3, value)

    @staticmethod
    def speed4(model, value):
        model.simple_mset_send(Attr.speed4, value)

    @staticmethod
    def speed5(model, value):
        model.simple_mset_send(Attr.speed5, value)

    @staticmethod
    def speed6(model, value):
        model.simple_mset_send(Attr.speed6, value)

    # @staticmethod
    # def WriteConfExec(model, value):
    # 	"""Запись 1 (true) инициирует в ПЛК процесс перезаписи параметров Преобразователя Частоты"""
    # 	model.simple_mset_send(Attr.WriteConfExec, value)




class Cmd(CmdBase):
    reset 				= 4 		# Сброс ошибки
    load_cfg 			= 5 		# Загрузить настройки в ПЧ
    save_to_eeprom      = 6         # Сохранить изменённые параметры в энергонезависимую память ПЧ



class Icmd(IcmdBase):

    @staticmethod
    def reset(model: 'AbstractFreqConv'):
        model.simple_cmd_send([(Attr.cmd, Cmd.reset)], message="сброс ошибки")

    @staticmethod
    def load_cfg(model: 'AbstractFreqConv'):
        model.simple_cmd_send([(Attr.cmd, Cmd.load_cfg)], message="загрузить настройки в ПЧ")

    @staticmethod
    def save_to_eeprom(model: 'AbstractFreqConv'):
        model.simple_cmd_send([(Attr.cmd, Cmd.save_to_eeprom)],
             

*/
