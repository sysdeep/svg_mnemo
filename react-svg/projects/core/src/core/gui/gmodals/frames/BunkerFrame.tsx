import { Attrs } from "../../../models/BunkerModel";
import ModelInterface from "../../../models/ModelInterface";
import useObjectModalsStore from "../../object_modals/object_modals_store";
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

  const { open_modal } = useObjectModalsStore();

  return (
    <div>
      {/* TODO: title */}
      <h5>{model.sname}</h5>

      {/* <AttrsTable model={model} attrs={table_attrs} /> */}

      {/* TODO: controls */}
      <ControlsTable model={model} attrs={table_controls} />

      {/* std obj modal */}
      <a href="#" onClick={() => open_modal(model, 0, 0)}>
        obj modal
      </a>
    </div>
  );
}
