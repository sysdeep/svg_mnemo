import useContextMenu from "../../../../core/components/context_menu/useContextMenu";
import { Belt } from "../../../../views/belt";
import ObjectContextMenu from "../components/ObjectContextMenu";
import TransporterMotor from "../transporter_motor/TransporterMotor";
import WarehouseTransporterCompose, {
  WarehouseTransporterState,
} from "./WarehouseTransporterCompose";
import useCtrlState from "../components/useCtrlState";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseTransporterCompose;
};

export default function WarehouseTransporter({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* self */}
      <WarehouseTransporterVM x={x} y={y} ctrl={ctrl} />

      <TransporterMotor x={x + 40} y={y + 8} ctrl={ctrl.motor} />
    </g>
  );
}

function WarehouseTransporterVM({ x, y, ctrl }: Props) {
  const { clicked, points, onContextMenu } = useContextMenu();

  const state = useCtrlState<WarehouseTransporterState>(ctrl);

  return (
    <g onContextMenu={onContextMenu}>
      <rect
        x={x}
        y={y}
        width={380}
        height={40}
        stroke="green"
        strokeWidth={1}
        fillOpacity={0}
      >
        <title>{ctrl.model.sname}</title>

        {/* ----------------------------- */}
        <ObjectContextMenu
          model={ctrl.model}
          top={points.y}
          left={points.x}
          active={clicked}
        >
          {/* <ContextMenuAction onClick={() => console.log("menu click, aaaa")}>
            test aaaaa
          </ContextMenuAction> */}
        </ObjectContextMenu>
        {/* ----------------------------- */}
      </rect>

      {/* experinments */}
      {state.is_block && (
        <text x={x} y={y}>
          BLOCK!!!
        </text>
      )}

      {state.is_error && (
        <text x={x} y={y + 16} stroke="red">
          ERROR!!!
        </text>
      )}
      {/* experinments */}

      <Belt x={x} y={y} logic={state.logic} />
    </g>
  );
}

// public max_width: number = 380
//     public max_height: number = 40

//     private _body: Rect

//     constructor() {
//         super()
//         this._body = new Rect({
//             width: this.max_width,
//             height: this.max_height,
//             //   fill: "red",
//             stroke: 'green',
//             strokeWidth: 1,
//         })
//         this.add(this._body)

//         const bl = new BeltLegacy(9)
//         bl.setPosition({ x: 0, y: 0 })
//         this.add(bl)
//     }
