type Props = {
  attr_id: number;
  name: string;
  value: any;
  description: string;
  onChange: (v: any) => void;

  // TODO
  // formatter?: (v: any) => string
  // wrap: boolean
};

export default function ControlSwitch({ name, value, onChange }: Props) {
  const on_change = (e: any) => {
    const v = e.currentTarget.checked ? 1 : 0;
    onChange(v);
  };

  //   const changed_value = value > 0? "on" : "off"

  return (
    <tr>
      <td>{name}</td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            checked={value > 0}
            onChange={on_change}
          />
          {/* <label className="form-check-label" htmlFor="switchCheckDefault">
            {name} - {value}
          </label> */}
        </div>
      </td>
      {/* units */}
      <td></td>
      <td></td>
    </tr>
  );
}
