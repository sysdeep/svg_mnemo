import { ReactNode } from "react";
import useContextMenu from "../../components/context_menu/useContextMenu";
import ModelInterface from "../../models/ModelInterface";
import ObjectContextMenu from "./ObjectContextMenu";

type Props = {
  model: ModelInterface;
  children: ReactNode;
  add_items?: ReactNode;
};

/**
 * стандартная обёртка для вызова контекстного меню
 */
export default function ObjectContextMenuWrapper({ model, children, add_items }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();
  return (
    <g onContextMenu={onContextMenu}>
      {children}
      <ObjectContextMenu model={model} top={points.y} left={points.x} active={clicked} add_items={add_items} />
    </g>
  );
}
