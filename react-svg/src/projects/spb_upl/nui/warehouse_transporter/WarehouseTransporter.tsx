import { Belt } from "../../../../views/belt";
import TransporterMotor from "../transporter_motor/TransporterMotor";
import WarehouseTransporterCompose from "./WarehouseTransporterCompose";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseTransporterCompose;
};

export default function WarehouseTransporter({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* <rect
        x={x}
        y={y}
        width={380}
        height={40}
        stroke="green"
        strokeWidth={1}
        fill="none"
      /> */}

      <Belt x={x} y={y} />
      <TransporterMotor x={x + 40} y={y + 8} ctrl={ctrl.motor} />
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
