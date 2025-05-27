import { Attrs } from "../../../models/DSensorModel";
import ModelInterface from "../../../models/ModelInterface";
import { format_yes_no, prepare_attrs } from "./components/attrs_extractor";
import AttrsTable from "./components/AttrsTable";
import { NeedControl, prepare_controls } from "./components/controls_helper";
import ControlsTable from "./components/ControlsTable";

type Props = {
  model: ModelInterface;
};

export default function DSensor({ model }: Props) {
  const need_attrs = [
    // { attr_id: Attrs.block, formatter: format_yes_no },
    { attr_id: Attrs.state, formatter: format_yes_no },
    { attr_id: Attrs.inverted_logic, formatter: format_yes_no },
    // { attr_id: Attrs.error_type },
  ];

  const table_attrs = prepare_attrs(model, need_attrs);

  const need_controls: NeedControl[] = [{ attr_id: Attrs.block }, { attr_id: Attrs.control }];
  const table_controls = prepare_controls(model, need_controls);

  return (
    <div>
      {/* TODO: title */}
      <h6>{model.sname}</h6>

      <AttrsTable model={model} attrs={table_attrs} />

      {/* TODO: controls */}
      <ControlsTable model={model} attrs={table_controls} />
    </div>
  );
}
