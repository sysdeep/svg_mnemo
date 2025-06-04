import { useEffect, useState } from "react";
import ModelInterface from "../../../../models/ModelInterface";
import ControlSwitch from "./ControlSwitch";
import { ControlType } from "./controls_helper";
import ControlText from "./ControlText";

type ControlCB = (value: any) => void;

const controls_map = {
  [ControlType.switch]: (m: ControlsTableRowModel, cb: ControlCB) => (
    <ControlSwitch name={m.name} description="TODO" value={m.value} attr_id={m.attr_id} onChange={cb} />
  ),
  [ControlType.text]: (m: ControlsTableRowModel, cb: ControlCB) => (
    <ControlText name={m.name} description="TODO" value={m.value} attr_id={m.attr_id} onChange={cb} />
  ),
};

export type ControlsTableRowModel = {
  attr_id: number;
  name: string;
  description: string;
  value: any;
  control_type: number;
  //   formatter: (v: any) => string; // функция форматирования нового значения
};

type Props = {
  model: ModelInterface;
  attrs: ControlsTableRowModel[];
};

/*

каждый контрол должен иметь 4 колонки
name  control   units   apply

*/

export default function ControlsTable({ model, attrs }: Props) {
  const [workAttrs, setWorkAttrs] = useState<ControlsTableRowModel[]>([...attrs]);

  useEffect(() => {
    const on_model = (attr_id: number) => {
      let w_attr = workAttrs.find((attr) => attr.attr_id === attr_id);
      if (w_attr) {
        const value = model.get_attr_value(attr_id);
        setWorkAttrs((attrs) => attrs.map((attr) => (attr.attr_id !== attr_id ? attr : { ...attr, value })));
      }
    };

    model.connect_changed(on_model);
    return () => model.disconnect_changed(on_model);
  }, []);

  // TODO: разные контролы
  return (
    <div>
      <table>
        <tbody>
          {workAttrs.map((attr) => {
            return controls_map[attr.control_type](attr, (v: any) => model.send_attr(attr.attr_id, v));
            // <ControlSwitch
            //   name={attr.name}
            //   key={attr.attr_id}
            //   description="TODO"
            //   value={attr.value}
            //   attr_id={attr.attr_id}
            //   onChange={(v: any) => model.send_attr(attr.attr_id, v)}
            // />
          })}
        </tbody>
      </table>
    </div>
  );
}
