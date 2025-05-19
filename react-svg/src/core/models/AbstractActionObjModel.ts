import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

export const Attrs = {
  cmd: 0,
  logic: 1,
  block: 2,
  error_code: 3,
  cur_cmd: 4,
  ready: 5,
  // use_in_dosing	= 6, 			// Флаг использования в дозировании

  //--- 2021.10.26
  strWarning: 995, // string,   access: 3 ---wr,  name: Предупреждение в текстовом формате
  strError: 996, // string,   access: 3 ---wr,  name: Ошибка в текстовом формате

  used_in_cur_job: 998, // int,      access: 1 ----r,  name: Используется в текущем задании?
  plc_log: 997, // string,   access: 1 ----r,  name: Сообщение от ПЛК
  state_STM: 999, // Состояние state-machine
  warning: 1000,
  server_soft_simulation: 1001, // Программная симуляция сервером
};

// """список кодов cmd"""
export enum Cmd {
  no_cmd = 0,
  confirm_error = 1, //!< Квитировать ошибку
  block = 2,
  unblock = 3,
  action_on = 4,
  action_off = 5,
}

export const AbstractActionObjModelProtoName = "AbstractActionObj";

export default class AbstractActionObjModel extends BaseModel {
  proto_name: string = AbstractActionObjModelProtoName;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
    // let attrs_list = [
    //   new Attr<boolean>(Attrs.state, false), // state
    //   new Attr<boolean>(Attrs.error, false), // error
    //   new Attr<boolean>(Attrs.block, false), // block
    // ];
    // super(sys_id, attrs_list);
  }

  // public set_error(value: boolean) {
  //   this.get_attr(Attrs.error)?.set_value(value);
  // }
}

/*

class Icmd:
    @staticmethod
    def confirm_error(model: Base):
        """"Подверждение ошибки"""
        model.simple_cmd_send([(Attr.cmd, Cmd.confirm_error)], message="подверждение ошибки")

    @staticmethod
    def action_on(model: Base):
        """"Выдать управление"""
        model.simple_cmd_send([(Attr.cmd, Cmd.action_on)], message="выдать управление")

    @staticmethod
    def action_off(model: Base):
        """"Снять управление"""
        model.simple_cmd_send([(Attr.cmd, Cmd.action_off)], message="снять управление")

    @staticmethod
    def block(model: Base):
        """"Заблокировать"""
        model.simple_cmd_send([(Attr.cmd, Cmd.block)], message="заблокировать")

    @staticmethod
    def unblock(model: Base):
        """"Разблокировать"""
        model.simple_cmd_send([(Attr.cmd, Cmd.unblock)], message="разблокировать")

    @staticmethod
    def send(model, attr_id, value):
        """generic"""
        model.simple_mset_send(attr_id, value)


*/

/*

class Iattr:
    """объект, сожержащий интерфейс отсылки атрибутов"""

    @staticmethod
    def server_soft_simulation(model, value):
        model.simple_mset_send(Attr.server_soft_simulation, value)

    # @staticmethod
    # def block(model, value):
    # 	model.simple_mset_send(Attr.block, value)
    #
    # @staticmethod
    # def multiple_fb_dosing_mode(model, value):
    # 	model.simple_mset_send(Attr.multiple_fb_dosing_mode, value)
    #
    # @staticmethod
    # def etalon_weight(model, value):
    # 	model.simple_mset_send(Attr.etalon_weight, value)

    @staticmethod
    def send(model, attr_id, value):
        model.simple_mset_send(attr_id, value)

*/

/*


class AbstractActionObj(Base, StrErrorsMixin):
    PROTO_NAME = "AbstractActionObj"
    """
        Абстрактная модель - стандартная модель без дополнений
    """
    def __init__(self, sys_id, name="AbstractActionObj", sname="Абстрактная модель"):
        super(AbstractActionObj, self).__init__(sys_id, name, sname)
        self.proto 		= "AbstractActionObj"


        # self.traps[Attr.error_code] 	= self.simple_ulog_error
        self.append_trap_handler(Attr.error_code, self.simple_ulog_error)

        # self.msettings.init_showed_info_attrs([0, 1, 2, 3, 4, 5])

        #--- список ошибок от оборудования
        self.raw_errors = []

        #--- отображение сообщений от плк
        self.append_trap_handler(Attr.strWarning, self.on_str_warning)

        #--- обработка ошибок в текстовом формате
        self.append_trap_handler(Attr.strError, self.on_str_error)

        # обработка сообщений от плк
        self.append_trap_handler(Attr.plc_log, self.on_plc_log)

    def on_plc_log(self, attr_id: int, value):
        PLCLogHandler.handle(attr_id, value, model=self)

    def on_str_warning(self, attr_id, value):
        """отображение и логирование сырой строки предупреждения от ПЛК"""

        # print("Warning!!: " + value)

        if isinstance(value, str):

            if len(value) and (value != "0"):

                #--- записываем в лог
                self.ulog.warning("{}: {}".format(self.sname, value))

                #--- отображаем всплывающее сообщение
                self.toastr(value, self.sname, "warning")

                #--- отправляем в gelog
                self.gelog_adapter.info("{}: сообщение от объекта: {}".format(self.sname, value), self.get_full_path(), category=Categories.EQUIPMENT)


    def on_str_error(self, attr_id, value):
        """накапливание сообщений об ошибках от объекта"""

        if isinstance(value, str):

            if len(value) and (value != "0"):

                msg = "{}: {}".format(self.sname, value)

                #--- записываем в лог
                self.ulog.error(msg)

                #--- отправляем в gelog
                self.gelog_adapter.error(msg, self.get_full_path(), category=Categories.EQUIPMENT)

                # NOTE: если сообщение уже есть в списке - не добавляем(2024.02.07)
                if value not in self.raw_errors:
                    self.raw_errors.append(value)
            else:
                self.raw_errors = []



 */
