import { createContext } from "react";

export type AppState = {
  is_project_modal: boolean; // отобразить модал проекта
};

export const AppStateContext = createContext<AppState>(create_app_state());

export function create_app_state(): AppState {
  return {
    is_project_modal: false,
  };
}
