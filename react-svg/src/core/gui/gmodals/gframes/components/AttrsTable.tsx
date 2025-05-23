/*
ms3/gui/gmodals/frames/components/AttrsTable.py
*/

import { useEffect, useState } from "react";
import ModelInterface from "../../../../models/ModelInterface";

/**
 * модель данных атрибута с тек. значением
 */
export type AttrsTableRowModel = {
  attr_id: number;
  name: string;
  description: string;
  value: string;
  formatter: (v: any) => string; // функция форматирования нового значения
};

type Props = {
  model: ModelInterface;
  attrs: AttrsTableRowModel[];
};

export default function AttrsTable({ model, attrs }: Props) {
  const [workAttrs, setWorkAttrs] = useState<AttrsTableRowModel[]>([...attrs]);

  useEffect(() => {
    const on_model = (attr_id: number) => {
      let w_attr = workAttrs.find((attr) => attr.attr_id === attr_id);
      if (w_attr) {
        const value = w_attr.formatter(model.get_attr_value(attr_id));
        setWorkAttrs((attrs) => attrs.map((attr) => (attr.attr_id !== attr_id ? attr : { ...attr, value })));
      }
    };

    model.connect_changed(on_model);
    return () => model.disconnect_changed(on_model);
  }, []);

  return (
    <div>
      <table className="table table-striped table-sm">
        <tbody>
          {workAttrs.map((attr) => {
            return (
              <Row attr_id={attr.attr_id} name={attr.name} key={attr.attr_id} description="TODO" value={attr.value} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type RowProps = {
  attr_id: number;
  name: string;
  value: string;
  description: string;

  // TODO
  // formatter?: (v: any) => string
  // wrap: boolean
};

function Row({ attr_id, name, value, description }: RowProps) {
  const title = `[${attr_id}] ${description}`;
  return (
    <tr>
      <td title={title}>{name}</td>
      <td>{value}</td>
    </tr>
  );
}
