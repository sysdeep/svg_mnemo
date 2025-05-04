import { useEffect, useState } from "react";
import ModelInterface from "../../../../../core/models/ModelInterface";

type Props = {
  obj: ModelInterface;
};

// type Presend = {
//   attr_id: number;
//   value: any;
// };

type EmuAttr = {
  attr_id: number;
  name: string;
  value: number;
  new_value: string;
};

/**
 *
 *
 */
export default function EmuForm({ obj }: Props) {
  const [presend, setPresend] = useState<EmuAttr[]>([]);

  useEffect(() => {
    // init model attrs list
    setPresend(
      obj.get_attrs().map((attr) => {
        return {
          attr_id: attr.id,
          name: attr.name,
          value: attr.get_value(),
          new_value: "",
        };
      })
    );

    // connect to model
    const on_attr_changed = (attr_id: number) => {
      setPresend((curr_dataset) => {
        return curr_dataset.map((item) => {
          if (item.attr_id !== attr_id) return { ...item };
          return { ...item, value: obj.get_attr_value(attr_id) };
        });
      });
    };
    obj.connect_changed(on_attr_changed);
    return () => obj.disconnect_changed(on_attr_changed);
  }, [obj]);

  // input value
  const on_input = (e: any, attr_id: number) => {
    e.preventDefault();

    setPresend((curr_dataset) => {
      return curr_dataset.map((item) => {
        if (item.attr_id !== attr_id) return { ...item };
        return { ...item, new_value: e.target.value };
      });
    });
  };

  const on_to_model = (e: any, attr_id: number) => {
    e.preventDefault();
    let found = presend.find((item) => item.attr_id === attr_id);
    console.log(attr_id, found);

    if (found) {
      obj.set_attr_value(found.attr_id, found.new_value);
    }
  };

  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>value</th>
            <th>send</th>
            <th>to model</th>
            <th>to server</th>
          </tr>
        </thead>
        <tbody>
          {presend.map((attr, i) => {
            return (
              <tr key={i}>
                <td>{attr.attr_id}</td>
                <td>{attr.name}</td>
                <td>
                  {attr.value} - {attr.new_value}
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => on_input(e, attr.attr_id)}
                    value={attr.new_value}
                  ></input>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => on_to_model(e, attr.attr_id)}
                  >
                    send
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm">send</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
