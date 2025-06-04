import ModelInterface from "../../../../models/ModelInterface";
import { ControlsTableRowModel } from "./ControlsTable";

/**
 * типы контролов
 */
export const ControlType = {
  switch: 0,
  text: 1,
  int: 2,
  int_float: 3,
};

export type NeedControl = {
  attr_id: number;
  control_type: number;
};

export function prepare_controls(model: ModelInterface, need_controls: NeedControl[]): ControlsTableRowModel[] {
  const model_attrs = model.get_attrs();
  return need_controls.map((need_attr) => {
    let model_attr = model_attrs.find((m_attr) => m_attr.id === need_attr.attr_id);
    if (!model_attr) {
      throw new Error(`model ${model.sname} не содержит атрибута: ${need_attr.attr_id}`);
    }

    // const formatter = need_attr.formatter ? need_attr.formatter : String;

    return {
      attr_id: need_attr.attr_id,
      name: model_attr.name,
      description: model_attr.name, // TODO
      value: model_attr.value,
      control_type: need_attr.control_type,
      //   value: formatter(model_attr.get_value()),
      //   formatter: formatter,
    };
  });
}
