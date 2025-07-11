import { AbstractActionObjModel, Attrs as AttrsBase, Cmd as CmdBase } from "./AbstractActionObjModel";

export const Attrs = {
  ...AttrsBase,
  aim_pos: 6, // vtype: int,      access: 3 ---wr,  name: Цель
  num_of_hoppers: 7, // vtype: int,      access: 4 --d--,  name: Количество приёмных бункеров
  cur_pos: 8, // vtype: int,      access: 3 ---wr,  name: Текущая позиция
  aim_pos_wait_time: 9, // vtype: int,      access: 15 -sdwr, name: Время ожидания целевой позиции
  is_pos_ctrl: 10, // vtype: int,      access: 15 -sdwr, name: Контролировать удержание позиции
};

export const Cmd = {
  ...CmdBase,
  move_to_pos: 4, // Движение к заданной позиции
  stop: 5, // Стоп
};

// TODO
/*
class Icmd(IcmdBase):

    @staticmethod
    def move_to_pos(model, pos_index: int):
        """pos_index - from 1"""
        model.simple_cmd_send([(Attr.aim_pos, pos_index), (Attr.cmd, Cmd.move_to_pos)], message="движение к заданной позиции: {}".format(pos_index))

    @staticmethod
    def stop(model):
        """выключение"""
        model.simple_cmd_send([(Attr.cmd, Cmd.stop)], message="стоп")
*/

export const NwayMotorizedDustributionHopperProtoName = "NwayMotorizedDustributionHopper";

export class NwayMotorizedDustributionHopper extends AbstractActionObjModel {
  proto_name: string = NwayMotorizedDustributionHopperProtoName;
}
