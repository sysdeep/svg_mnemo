import { create } from "zustand";
import ModelInterface from "../core/models/ModelInterface";

type ObjectModal = {
  obj: ModelInterface;
};

interface StoreState {
  modals: ObjectModal[];
  open_modal: (obj: ModelInterface) => void;
  close_modal: (obj: ModelInterface) => void;
}

const useObjectsModalsStore = create<StoreState>((set) => ({
  modals: [] as ObjectModal[],
  open_modal: (obj: ModelInterface) =>
    set((state) => ({
      modals: [
        ...state.modals.filter((m: ObjectModal) => m.obj !== obj),
        create_modal(obj),
      ],
    })),
  close_modal: (obj: ModelInterface) =>
    set((state) => ({
      modals: [...state.modals.filter((m: ObjectModal) => m.obj !== obj)],
    })),
}));

function create_modal(obj: ModelInterface): ObjectModal {
  return {
    obj,
  };
}

export default useObjectsModalsStore;
