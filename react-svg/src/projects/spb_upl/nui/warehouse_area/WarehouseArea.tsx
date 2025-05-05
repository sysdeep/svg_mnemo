import { useContext, useEffect, useState } from "react";
import WarehouseLine from "../warehouse_line/WarehouseLine";
import WarehouseAreaCompose, {
  WarehouseAreaState,
} from "./WarehouseAreaCompose";
import { createPortal } from "react-dom";
import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import ContextMenu from "../../../../core/components/context_menu/ContextMenu";
import ContextMenuAction from "../../../../core/components/context_menu/ContextMenuAction";
import ContextMenuText from "../../../../core/components/context_menu/ContextMenuText";
import ContextMenuDivider from "../../../../core/components/context_menu/ContextMenuDivider";
import ContextMenuHeader from "../../../../core/components/context_menu/ContextMenuHeader";
import { ObjectsModalContext } from "../../../../contexts/ObjectsModalContext";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseAreaCompose;
};

export default function WarehouseArea({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <WarehouseAreaVM x={x} y={y} ctrl={ctrl} />

      {/* compose */}
      {ctrl.lines.map((line_ctrl, i) => {
        return <WarehouseLine x={x} y={y + 260 * i} ctrl={line_ctrl} key={i} />;
      })}

      <title>I'm a aaaa</title>
    </g>
  );
  // this._body = new Rect({
  //   width: this.max_width,
  //   height: this.max_height,
  //   //   fill: "red",
  //   stroke: "black",
  //   strokeWidth: 1,
  // });
  // this.add(this._body);
  // // lines
  // let line_x = 0;
  // let line_y = 0;
  // for (let i = 0; i < 3; i++) {
  //   let line = new WarehouseLineView();
  //   line.setPosition({ x: line_x, y: line_y });
  //   this._lines.push(line);
  //   this.add(line);
  //   line_y += line.max_height;
  // }
}

function WarehouseAreaVM({ x, y, ctrl }: Props) {
  const [color, setColor] = useState<string>("black");
  const [st, setSt] = useState<WarehouseAreaState>({ ...ctrl.value });

  const { show_modal } = useContext(ObjectsModalContext);

  useEffect(() => {
    const on_state = () => {
      console.log("wh area state changed");
      setSt({ ...ctrl.value });
    };
    ctrl.connect(on_state);

    return () => ctrl.disconnect(on_state);
  }, []);

  const { clicked, points, onContextMenu } = useContextMenu();

  const onSettings = () => {
    console.log("show settings");
    show_modal(ctrl.model);
  };

  return (
    <rect
      x={x}
      y={y}
      width={400}
      height={400}
      stroke={color}
      strokeWidth={1}
      // fill={fill_color}
      // fill="none"
      // onMouseEnter={() => setColor("red")}
      // onMouseLeave={() => setColor("black")}
      onContextMenu={onContextMenu}
    >
      <title>{ctrl.model.sname}</title>
      <ContextMenu top={points.y} left={points.x} active={clicked}>
        <ContextMenuHeader>{ctrl.model.sname}</ContextMenuHeader>

        <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
          test aaaaa
        </ContextMenuAction>

        <ContextMenuDivider />

        <ContextMenuAction onClick={onSettings}>Settings</ContextMenuAction>
      </ContextMenu>
    </rect>
  );
}
