import { Attrs } from "../../../models/BunkerModel";
import ModelInterface from "../../../models/ModelInterface";
import { ControlType, NeedControl, prepare_controls } from "./components/controls_helper";
import ControlsTable from "./components/ControlsTable";

type Props = {
  model: ModelInterface;
};

export default function BunkerFrame({ model }: Props) {
  const need_controls: NeedControl[] = [
    { attr_id: Attrs.mnemo_name, control_type: ControlType.text },
    { attr_id: Attrs.using_mnemo_name, control_type: ControlType.switch },
    { attr_id: Attrs.block, control_type: ControlType.switch },
  ];
  const table_controls = prepare_controls(model, need_controls);

  return (
    <div>
      {/* TODO: title */}
      <h6>{model.sname}</h6>

      {/* <AttrsTable model={model} attrs={table_attrs} /> */}

      {/* TODO: controls */}
      <ControlsTable model={model} attrs={table_controls} />
    </div>
  );
}
