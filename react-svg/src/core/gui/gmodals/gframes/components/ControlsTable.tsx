import { ChangeEvent, useEffect, useState } from "react";
import ModelInterface from "../../../../models/ModelInterface";

export type ControlsTableRowModel = {
  attr_id: number;
  name: string;
  description: string;
  value: any;
  //   formatter: (v: any) => string; // функция форматирования нового значения
};

type Props = {
  model: ModelInterface;
  attrs: ControlsTableRowModel[];
};

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

  return (
    <div>
      {workAttrs.map((attr) => {
        return (
          <ControlSwitchRow
            name={attr.name}
            key={attr.attr_id}
            description="TODO"
            value={attr.value}
            attr_id={attr.attr_id}
            onChange={(v: any) => model.set_attr_value(attr.attr_id, v)} // TODO
          />
        );
      })}
    </div>
  );
}

type RowProps = {
  attr_id: number;
  name: string;
  value: any;
  description: string;
  onChange: (v: any) => void;

  // TODO
  // formatter?: (v: any) => string
  // wrap: boolean
};

function ControlSwitchRow({ name, value, onChange }: RowProps) {
  const on_change = (e: any) => {
    const v = e.currentTarget.checked ? 1 : 0;
    onChange(v);
  };

  //   const changed_value = value > 0? "on" : "off"

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="switchCheckDefault"
        checked={value > 0}
        onChange={on_change}
      />
      <label className="form-check-label" htmlFor="switchCheckDefault">
        {name} - {value}
      </label>
    </div>
  );
}
