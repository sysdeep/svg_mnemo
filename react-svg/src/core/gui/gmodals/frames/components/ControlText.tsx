import { useState } from "react";

type Props = {
  attr_id: number;
  name: string;
  value: string;
  description: string;
  onChange: (v: string) => void;
};

export default function ControlText({ name, value, onChange }: Props) {
  const [editValue, setEditValue] = useState<string>(value);

  const on_change = (e: any) => {
    setEditValue(e.target.value);
  };

  const on_apply = (e: any) => {
    e.preventDefault();
    onChange(editValue);
  };

  const input_touch_class = value === editValue ? "" : "bg-warning-subtle";

  return (
    <tr>
      {/* name */}
      <td>{name}</td>

      {/* control */}
      <td>
        <div className="">
          <input className={`form-control ${input_touch_class}`} type="text" value={editValue} onChange={on_change} />
          {/* <label className="form-check-label" htmlFor="switchCheckDefault">
            {name} - {value} - TEXT
          </label> */}
        </div>
      </td>

      {/* units */}
      <dt></dt>

      {/* apply */}
      <td>
        <button className="btn btn-primary" onClick={on_apply}>
          Применить
        </button>
      </td>
    </tr>
  );
}
