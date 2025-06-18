import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { AbstractActionObjModel, Attrs as AttrsBase } from "./AbstractActionObjModel";
import { TransmitterAttrs } from "./components/transmitter_attrs";

// """список кодов cmd"""

// enum CmdLocal {
//   start = 4,
//   stop = 5,
// }
// export type Cmd = CmdBase | CmdLocal;

/*
class Direction:
    """направление вращения"""
    forward = 1
    backward = -1



class Cmd(CmdBase):
    """список кодов cmd"""
    set_block			= 2 	#!< Заблокировать
    unblock				= 3 	#!< Разблокировать
    stop				= 4 	#!< Стоп
    start				= 5 	#!< Пуск

    # start_forward		= 5 	#!< DEPRICATED
    # start_backward		= 6 	#!< DEPRICATED

    set_speed				= 7 	#!< Установить скорость
    reset_freq_conv			= 8 	# Сброс ошибки ПЧ
    do_freq_conv_autotuning	= 9 	# Выполнить автоподстройку ПЧ

*/

export const Attrs = {
  ...AttrsBase,

  mnemo_name: 51, // vtype: string,   access: 7 --dwr,  name: Название на мнемосхеме
  using_mnemo_name: 52, // vtype: int,      access: 3 ---wr,  name: Использовать название мнемосхемы

  ...TransmitterAttrs,
};

export const BunkerModelProtoName = "Bunker";

export class BunkerModel extends AbstractActionObjModel {
  proto_name: string = BunkerModelProtoName;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);
    // let attrs_list = [
    //   new Attr<boolean>(Attrs.state, false), // state
    //   new Attr<boolean>(Attrs.error, false), // error
    //   new Attr<boolean>(Attrs.block, false), // block
    // ];
    // super(sys_id, attrs_list);
  }
}

/*

class Iattr(IattrBase):
    """объект, сожержащий интерфейс отсылки атрибутов"""
    @staticmethod
    def current_control(model, value):
        model.simple_mset_send(Attr.current_control, value)

    @staticmethod
    def ready_control(model, value):
        model.simple_mset_send(Attr.ready_control, value)

    @staticmethod
    def max_current(model, value):
        model.simple_mset_send(Attr.max_current, value)

    @staticmethod
    def motor_off_timeout(model, value):
        model.simple_mset_send(Attr.motor_off_timeout, value)

    @staticmethod
    def instant_off_curent(model, value):
        model.simple_mset_send(Attr.instant_off_curent, value)



class Icmd(IcmdBase):

    @staticmethod
    def set_block(model):
        model.simple_cmd_send([(Attr.cmd, Cmd.set_block)], message="заблокировать")

    @staticmethod
    def unblock(model):
        model.simple_cmd_send([(Attr.cmd, Cmd.unblock)], message="разблокировать")

    @staticmethod
    def stop(model):
        model.simple_cmd_send([(Attr.cmd, Cmd.stop)], message="стоп")

    @staticmethod
    def start(model, direction: int):
        model.simple_cmd_send([(Attr.dir, direction), (Attr.cmd, Cmd.start)], message="пуск - {}".format(direction))


    @staticmethod
    def start_forward(model):
        model.simple_cmd_send([(Attr.dir, Direction.forward), (Attr.cmd, Cmd.start)], message="пуск в прямом направлении")


    @staticmethod
    def start_backward(model):
        model.simple_cmd_send([(Attr.dir, Direction.backward), (Attr.cmd, Cmd.start)], message="пуск в обратном направлении")

    @staticmethod
    def do_freq_conv_autotuning(model):
        model.simple_cmd_send([(Attr.cmd, Cmd.do_freq_conv_autotuning)], message="выполнить автоподстройку ПЧ")


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
