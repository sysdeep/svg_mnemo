import { ReactNode } from "react";
import ModelInterface from "../../models/ModelInterface";
import useObjectsModalsStore from "../../../stores/objects_modals_store";
import ContextMenu from "../../components/context_menu/ContextMenu";
import ContextMenuHeader from "../../components/context_menu/ContextMenuHeader";
import ContextMenuDivider from "../../components/context_menu/ContextMenuDivider";
import ContextMenuAction from "../../components/context_menu/ContextMenuAction";

type Props = {
  model: ModelInterface;
  top: number;
  left: number;
  active: boolean;
  children?: ReactNode;
};

export default function ObjectContextMenu({
  model,
  top,
  left,
  active,
  children,
}: Props) {
  const { open_modal } = useObjectsModalsStore();

  return (
    <>
      <ContextMenu top={top} left={left} active={active}>
        <ContextMenuHeader>{model.sname}</ContextMenuHeader>

        {/* <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
                            test aaaaa
                          </ContextMenuAction> */}

        {/* any childrens */}

        {children}

        <ContextMenuDivider />

        <ContextMenuAction onClick={() => open_modal(model, left, top)}>
          Settings
        </ContextMenuAction>
      </ContextMenu>
    </>
  );
}
