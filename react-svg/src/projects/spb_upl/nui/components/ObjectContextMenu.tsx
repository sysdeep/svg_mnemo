import { ReactNode } from "react";
import ContextMenu from "../../../../core/components/context_menu/ContextMenu";
import ContextMenuAction from "../../../../core/components/context_menu/ContextMenuAction";
import ContextMenuDivider from "../../../../core/components/context_menu/ContextMenuDivider";
import ContextMenuHeader from "../../../../core/components/context_menu/ContextMenuHeader";
import ModelInterface from "../../../../core/models/ModelInterface";
import useObjectsModalsStore from "../../../../stores/objects_modals_store";

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
