import { ReactNode } from "react";
import useContextMenu from "../../components/context_menu/useContextMenu";
import ModelInterface from "../../models/ModelInterface";
import ObjectContextMenu from "./ObjectContextMenu";

type Props = {
  model: ModelInterface;
  children: ReactNode;
};

/**
 * стандартная обёртка для вызова контекстного меню
 */
export default function ObjectContextMenuWrapper({ model, children }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();
  return (
    <g onContextMenu={onContextMenu}>
      {children}
      <ObjectContextMenu
        model={model}
        top={points.y}
        left={points.x}
        active={clicked}
      />
    </g>
  );
}
