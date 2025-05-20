import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";
import { AbstractActionObjModel, Attrs as AttrsBase, Cmd as CmdBase } from "./AbstractActionObjModel";

export const Direction = {
  forward: 1,
  backward: -1,
};

export const Cmd = {
  ...CmdBase,
  start: 4,
  stop: 5,
};

export const Attrs = {
  ...AttrsBase,
  dir: 6, // Направление вращения ленты
  is_reverse: 7, // Реверсивный?
  unloading_time: 8, // int,      access: 15 -sdwr, name: Время разгрузки транспортера
  timeToTerminationUnLoad: 9, // int,      access: 1 ----r,  name: Время до окончания разгрузки
  time_work: 990, // int,      access: 17 h---r, name: Время работы устройства
};

export const BeltTransporterModelProtoName = "BeltTransporter";

export class BeltTransporterModel extends AbstractActionObjModel {
  proto_name: string = BeltTransporterModelProtoName;

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

class Icmd(IcmdBase):
    @staticmethod
    def stop(model: AbstractActionObj):
        """Стоп"""
        model.simple_cmd_send([(Attr.cmd, Cmd.stop),], message="стоп")

    @staticmethod
    def start(model, direction: int):
        model.simple_cmd_send([(Attr.dir, direction), (Attr.cmd, Cmd.start)], message="пуск")

    @staticmethod
    def start_forward(model):
        model.simple_cmd_send([(Attr.dir, Direction.forward), (Attr.cmd, Cmd.start)], message="пуск в прямом направлении")

    @staticmethod
    def start_backward(model):
        model.simple_cmd_send([(Attr.dir, Direction.backward), (Attr.cmd, Cmd.start)], message="пуск в обратном направлении")







class Iattr(IattrBase):
    """объект, сожержащий интерфейс отсылки атрибутов"""
    @staticmethod
    def dir(model, value):
        model.simple_mset_send(Attr.dir, value)



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
