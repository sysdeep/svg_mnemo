import { useContext } from "react";
import { ObjectsModalContext } from "../../contexts/ObjectsModalContext";
import WinBox from "react-winbox";
import ModelInterface from "../../core/models/ModelInterface";

export default function ObjectsModalManager() {
  const { modals, hide_modal } = useContext(ObjectsModalContext);

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

    setTimeout(() => hide_modal(obj)); // to change winbox showing state while `onclose`, MUST wrap it within `setTimeout`
  };

  return (
    <div>
      <p>{modals.length}</p>

      <div>
        {/* <button onClick={() => setWindows([...windows, 1])}>add window</button> */}
        {modals.map((info, i) => (
          <WinBox
            key={i}
            id={info.model.sys_id}
            onClose={(force) => handleClose(force, info.model)}
            title={info.model.sname}
          >
            <div>Some children: {info.model.sname}</div>
          </WinBox>
        ))}
      </div>
    </div>
  );
}
