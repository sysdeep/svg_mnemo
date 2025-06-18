import WinBox from "react-winbox";
import ModelInterface from "../../models/ModelInterface";
import ObjectFrame from "../object_frame/ObjectFrame";
import useObjectModalsStore from "./object_modals_store";

export default function ObjectModalsManager() {
  const { modals, close_modal } = useObjectModalsStore();

  // TODO: тут какая то проблема с закрытием
  // при закрытии первого, событие приходит к последующему но с флагом force=true
  // https://github.com/nextapps-de/winbox?tab=readme-ov-file#winbox.onclose
  const handleClose = (force: boolean, obj: ModelInterface) => {
    // let state = [...windows];
    // // const index = state.findIndex((info) => info.id === id);
    // if (index === -1) return;
    // // if (state[index].onclose && state[index].onclose(force)) return true;
    // // window-specific onclose, returns true if it does not need the default close process.
    // state.splice(index, 1);
    console.log("on close: " + obj.sname, " " + `${force}`);
    if (force) return true;

    setTimeout(() => close_modal(obj)); // to change winbox showing state while `onclose`, MUST wrap it within `setTimeout`
  };

  return (
    <div>
      <p>store modals: {modals.length}</p>

      <div>
        {modals.map((info) => (
          <WinBox
            key={info.obj.sys_id}
            id={info.obj.sys_id}
            onClose={(force) => handleClose(force, info.obj)}
            title={info.obj.sname}
            width={800}
            height={800}
            // x={info.x}
            // y={info.y}
            x="center"
            y="center"
            // className="modern"
            border={1}
            noMax={true}
            noMin={true}
            noFull={true}>
            <div style={{ padding: "1rem" }}>
              <ObjectFrame obj={info.obj} />
            </div>
          </WinBox>
        ))}
      </div>
    </div>
  );
}
