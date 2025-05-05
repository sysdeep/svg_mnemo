/**
 *
 * https://habr.com/ru/articles/745162/
 *
 * что то я перемудрил...
 */

import { createContext, ReactNode, useState } from "react";
import ModelInterface from "../core/models/ModelInterface";

type ObjectModal = {
  model: ModelInterface;
};

export type ObjectsModalContextValue = {
  modals: ObjectModal[];
  show_modal: ObjModalCaller;
  hide_modal: ObjModalCaller;
};

function make_default(): ObjectsModalContextValue {
  return {
    modals: [],
    show_modal: (obj: ModelInterface) => {},
    hide_modal: (obj: ModelInterface) => {},
  };
}

export const ObjectsModalContext = createContext<ObjectsModalContextValue>(
  make_default()
);

export function ObjectsModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const context = useObjectsModalContext();
  return (
    <ObjectsModalContext.Provider value={context}>
      {children}
    </ObjectsModalContext.Provider>
  );
}
// export function useProjectContext() {
//   const get_project = () => {
//     fetch("/project.json").then((resp) => {
//       resp.json().then((data) => {
//         console.log(data);
//       });
//     });
//   };

//   return {
//     get_project,
//   };
// }

type ObjModalCaller = (obj: ModelInterface) => void;

function useObjectsModalContext() {
  const [modals, setModals] = useState<ObjectModal[]>([]);

  const show_modal = (obj: ModelInterface) => {
    // console.log("show modal for " + obj.sname);
    if (modals.filter((om) => om.model === obj).length === 0) {
      setModals([...modals, { model: obj }]);
    }
  };
  const hide_modal = (obj: ModelInterface) => {
    setModals(modals.filter((m) => m.model !== obj));
  };

  return {
    show_modal,
    hide_modal,
    modals,
  };
}
