import BaseModel from "../../core/models/BaseModel";
import ProjectInterface from "../project/project_interface";
import { ObjectSpec, ProtoSpec } from "../project/project_spec";

export const Attrs = {
  cur_mat_weight: 0, // int,      access: 7 --dwr,  name: Текущий вес материала в бункере
  weight_in_cur_job: 1, // int,      access: 1 ----r,  name: Вес в текущем задании
  material_id: 2, // string,   access: 7 --dwr,  name: Код материала
  max_weight: 3, // int,      access: 7 --dwr,  name: Максимальный вес
  default_weight: 50, // int Значение веса по умолчанию(GUI)
  allow_negative: 51, // int, access: 3 - --wr, name: Допускать	отрицательное значение

  // local
  local_available_mat_classes: 10001, // доступные классы материалов - заполняется от дозатора локально
};

// список кодов cmd
// export const Cmd = {
//   no_cmd: 0,
//   confirm_error: 1, //!< Квитировать ошибку
//   block: 2,
//   unblock: 3,
//   action_on: 4,
//   action_off: 5,
// };

export const FBunkerStorageProtoName = "FBunkerStorage";

export class FBunkerStorage extends BaseModel {
  proto_name: string = FBunkerStorageProtoName;

  constructor(project: ProjectInterface, proto_spec: ProtoSpec, object_spec: ObjectSpec) {
    super(project, proto_spec, object_spec);

    // TODO
    // # --- локальное дополнение класса материалов(заполняется из дозатора локально) - 2020.04.30
    //     local_available_mclasses_attr = AttrModel(
    //         Attr.local_available_mat_classes,
    //         self.proto,
    //         value=0,
    //         name="local_available_mat_classes",
    //         sname="Доступные классы материалов",
    //         access=1,
    //         vtype="int",
    //     )
    //     self.append_attr(local_available_mclasses_attr)
  }

  // public set_error(value: boolean) {
  //   this.get_attr(Attrs.error)?.set_value(value);
  // }

  // TODO
  //   def log_add_weight(self, value_g: int):
  //         msg = "{}: {}({})".format(self.sname, "добавление веса в бункер", value_g)
  //         self.ulog.info(msg)
  //         self.gelog_adapter.info(message=msg, category=Categories.DATA)

  // TODO
  // # material provider interface ---------------------------------------------
  // def get_material(self) -> MaterialMeta | None:

  //     return MaterialMeta(
  //         material_id=self.get_attr_value(Attr.material_id),
  //         weight=self.get_attr_value(Attr.cur_mat_weight),
  //     )
}

// TODO
/*
def find_available_mat_classes(model: FBunkerStorage) -> int:
    """
    получение маски класса материала из родительского объекта дозатора

    выполняем поиск по всем родителям, ищем метод get_available_mat_classes.
    данный метод должен содержать класс Дозатора, потому как именно в нём находится искомое значение маски класса
    2018.12.19

    метод реализован у
    - CementUploadSystem
    - GenericDoser
    """
    # --- заданный метод для поиска
    f_method = "get_available_mat_classes"

    # --- список всех родителей
    parents = model.get_parent_nodes()

    # --- результат
    result_value = 0

    for parent in parents:
        if hasattr(parent, f_method):
            result_value = getattr(parent, f_method)()
            break
    else:
        log.warning("{} - не смогли найти родителя с заданным методом: {}".format(model.name, f_method))

    return result_value

*/

// TODO
/*

class Iattr(object):
    """объект, сожержащий интерфейс отсылки атрибутов"""

    @staticmethod
    def max_weight(model, value):
        model.simple_mset_send(Attr.max_weight, value)

    @staticmethod
    def cur_mat_weight(model, value):
        model.simple_mset_send(Attr.cur_mat_weight, value)

    @staticmethod
    def add_weight(model: "FBunkerStorage", value_kg):
        """добавить вес. к тек. Требуется логирование!"""
        value_g = value_kg * 1000

        model.log_add_weight(value_g)

        current_weight = model.get_attr_value(Attr.cur_mat_weight)
        new_weight = current_weight + value_g
        model.simple_mset_send(Attr.cur_mat_weight, new_weight)

    @staticmethod
    def material_id(model, value):
        model.simple_mset_send(Attr.material_id, value)

    @staticmethod
    def default_weight(model, value):
        model.simple_mset_send(Attr.default_weight, value)

    @staticmethod
    def allow_negative(model, value):
        model.simple_mset_send(Attr.allow_negative, value)
*/
