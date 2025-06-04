import WinBox from "react-winbox";
import useGModalsStore, { type ObjectModal } from "./gmodals_store";
import ModelInterface from "../../../core/models/ModelInterface";
import { ReactElement } from "react";

type Props = {
  modals_map: { [key: string]: (model: ModelInterface) => ReactElement };
};

/**
 * управление отображение gmodals
 * на вход передаётся карта модалов по прототипам
 */
export default function GModalsManager({ modals_map }: Props) {
  const { modals, close_modal } = useGModalsStore();

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
    // console.log("on close: " + obj.sname, " " + `${force}`);
    if (force) return true;

    setTimeout(() => close_modal(obj)); // to change winbox showing state while `onclose`, MUST wrap it within `setTimeout`
  };

  return (
    <div>
      <p>store modals: {modals.length}</p>

      <div>
        {modals.map((info) => (
          <Modal info={info} handleClose={handleClose} modals_map={modals_map} key={info.obj.sys_id} />
        ))}
      </div>
    </div>
  );
}

// отдельный модал ------------------------------------------------------------
type ModalProps = {
  info: ObjectModal;
  handleClose: (force: boolean, obj: ModelInterface) => void;
  modals_map: { [key: string]: (model: ModelInterface) => ReactElement };
};

// TODO: если модал не найден - открывать стандартный модал или добавить ссылку
function Modal({ info, handleClose, modals_map }: ModalProps) {
  const modalConstructor = modals_map[info.obj.proto_name];

  const win_id = `gmodal-${info.obj.sys_id}`;

  return (
    <WinBox
      id={win_id}
      onClose={(force) => handleClose(force, info.obj)}
      title={info.obj.sname}
      width={600}
      height={700}
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
        {/* <ObjectFrame obj={info.obj} /> */}

        {modalConstructor ? modalConstructor(info.obj) : <NotFoundGModal obj={info.obj} />}
        {/* {mmap[info.obj.proto_name](info.obj)} */}
      </div>
    </WinBox>
  );
}

function NotFoundGModal({ obj }: { obj: ModelInterface }) {
  return (
    <div>
      <p>
        Бланк настроек для{" "}
        <strong>
          {obj.proto_name} - {obj.sname}
        </strong>{" "}
        - не найден
      </p>
    </div>
  );
}
