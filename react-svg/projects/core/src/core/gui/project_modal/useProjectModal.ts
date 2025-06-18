import { create } from "zustand";

interface StoreState {
  is_open: boolean;
  open_modal: () => void;
  close_modal: () => void;
}

/**
 * хук управления модалом проекта
 */
const useProjectModal = create<StoreState>((set) => ({
  is_open: false,
  open_modal: () =>
    set((_) => ({
      is_open: true,
    })),
  close_modal: () =>
    set((_) => ({
      is_open: false,
    })),
}));

export default useProjectModal;
