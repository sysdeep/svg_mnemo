import { ReactNode } from "react";
import ModelInterface from "../../models/ModelInterface";
import ContextMenu from "../../components/context_menu/ContextMenu";
import ContextMenuHeader from "../../components/context_menu/ContextMenuHeader";
import ContextMenuDivider from "../../components/context_menu/ContextMenuDivider";
import ContextMenuAction from "../../components/context_menu/ContextMenuAction";
import SettingsIcon from "./icons/SettingsIcon";
import useObjectModalsStore from "../../gui/object_modals/object_modals_store";
import useGModalsStore from "../../gui/gmodals/gmodals_manager/gmodals_store";

type Props = {
  model: ModelInterface;
  top: number;
  left: number;
  active: boolean;
  children?: ReactNode;
  add_items?: ReactNode; // дополнительные элементы, переданные как react компоненты
};

export default function ObjectContextMenu({ model, top, left, active, children, add_items = [] }: Props) {
  const { open_modal } = useObjectModalsStore();
  const { open_modal: open_gmodal } = useGModalsStore();

  return (
    <>
      <ContextMenu top={top} left={left} active={active}>
        <ContextMenuHeader>{model.sname}</ContextMenuHeader>

        {/* <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
                            test aaaaa
                          </ContextMenuAction> */}

        {/* any childrens */}

        {children}

        {add_items}

        <ContextMenuDivider />

        <ContextMenuAction onClick={() => open_gmodal(model, left, top)}>
          <SettingsIcon /> Свойства GModal
        </ContextMenuAction>

        <ContextMenuAction onClick={() => open_modal(model, left, top)}>
          <SettingsIcon /> Свойства
        </ContextMenuAction>
      </ContextMenu>
    </>
  );
}
