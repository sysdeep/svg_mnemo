import ModelInterface from "../../../../models/ModelInterface";
import { AttrsTableRowModel } from "./AttrsTable";

type NeedAttr = {
  attr_id: number;
  formatter?: (v: any) => string;
};

export function prepare_attrs(model: ModelInterface, need_attrs: NeedAttr[]): AttrsTableRowModel[] {
  const model_attrs = model.get_attrs();
  return need_attrs.map((need_attr) => {
    let model_attr = model_attrs.find((m_attr) => m_attr.id === need_attr.attr_id);
    if (!model_attr) {
      throw new Error(`model ${model.sname} не содержит атрибута: ${need_attr.attr_id}`);
    }

    const formatter = need_attr.formatter ? need_attr.formatter : String;

    return {
      attr_id: need_attr.attr_id,
      name: model_attr.name,
      description: model_attr.name, // TODO
      value: formatter(model_attr.get_value()),
      formatter: formatter,
    };
  });
}

/*
def model_setter_helper(self, model: BaseModel):
        """помошник для инициализации строк данными из модели"""
        for row in self.rows:
            attr_id = row.attr_id
            attr_model = model.get_attr_model(attr_id)
            if attr_model is None:
                log.warning("model: {} - нет модели атрибута: {}".format(model.sys_id, attr_id))
                continue

            #--- label name
            if attr_model.sname:
                attr_name = attr_model.sname
            else:
                attr_name = attr_model.name

            row.set_names(attr_name, attr_model.description)
*/

// TODO
/*
@staticmethod
    def format_from_description(model, attr_id, value):
        attr = model.get_attr_model(attr_id)
        return attr.get_value_description(value)

    @staticmethod
    def format_mm_to_m(v):
        """форматирование мм в м"""
        return "{:>2} м".format(v / 1000)


*/

export function format_on_off(v: number) {
  return v > 0 ? "вкл" : "выкл";
}

export function format_yes_no(v: number) {
  return v > 0 ? "да" : "нет";
}
