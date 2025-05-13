import { create } from "zustand";
import ModelInterface from "../core/models/ModelInterface";

type ObjectModal = {
  obj: ModelInterface;
  x: number;
  y: number;
};

interface StoreState {
  modals: ObjectModal[];
  open_modal: (obj: ModelInterface, x: number, y: number) => void;
  close_modal: (obj: ModelInterface) => void;
}

/**
 * хранилище объектов для отображения модалов объектов
 */
const useObjectsModalsStore = create<StoreState>((set) => ({
  modals: [] as ObjectModal[],
  open_modal: (obj: ModelInterface, x: number, y: number) =>
    set((state) => ({
      modals: [...state.modals.filter((m: ObjectModal) => m.obj !== obj), create_modal(obj, x, y)],
    })),
  close_modal: (obj: ModelInterface) =>
    set((state) => ({
      modals: [...state.modals.filter((m: ObjectModal) => m.obj !== obj)],
    })),
}));

function create_modal(obj: ModelInterface, x: number, y: number): ObjectModal {
  return {
    obj,
    x,
    y,
  };
}

export default useObjectsModalsStore;
