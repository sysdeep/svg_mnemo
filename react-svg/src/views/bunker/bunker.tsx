import { Amber, Red } from "../../core/nui/lib/palette";
import BunkerGeometry from "./bunker_geometry";

type Props = {
  x: number;
  y: number;
  geometry: BunkerGeometry;
};

/**
 *
 * http://css.yoksel.ru/svg-gradients/
 */
export default function Bunker({ x, y, geometry }: Props) {
  return (
    <g>
      <linearGradient id="main-bunker-gradient">
        <stop offset="0%" stopColor={Red.p900} />
        <stop offset="50%" stopColor={Amber.p700} />
        <stop offset="100%" stopColor={Red.p900} />
      </linearGradient>

      {/* top frame */}
      <rect
        width={geometry.max_width}
        height={geometry.top_height}
        x={x}
        y={y}
        fill="url(#main-bunker-gradient)"
      />
    </g>
  );
}

// this._top_frame = new Rect({
//   width: bunker_geometry.max_width,
//   height: bunker_geometry.top_height,
//   //   fill: "brown",
//   fillLinearGradientStartPoint: { x: 0, y: bunker_geometry.top_height / 2 },
//   fillLinearGradientEndPoint: {
//     x: bunker_geometry.max_width,
//     y: bunker_geometry.top_height / 2,
//   },
//   fillLinearGradientColorStops: [...body_gradient],
// });

// this._conus = new Shape({
//   //   width: bunker_geometry.max_width,
//   //   height: bunker_geometry.conus_height,
//   x: 0,
//   y: 0,
//   //   fill: "brown",
//   fillLinearGradientStartPoint: { x: 0, y: 0 },
//   fillLinearGradientEndPoint: {
//     x: bunker_geometry.max_width,
//     y: 0,
//   },
//   fillLinearGradientColorStops: [...body_gradient],
//   sceneFunc(context, shape) {
//     // console.log("sahpe!!");
//     context.beginPath();
//     context.moveTo(0, 0);
//     context.lineTo(bunker_geometry.max_width, 0);
//     context.lineTo(
//       bunker_geometry.max_width / 2 + bunker_geometry.out_width / 2,
//       bunker_geometry.conus_height
//     );
//     context.lineTo(
//       bunker_geometry.max_width / 2 - bunker_geometry.out_width / 2,
//       bunker_geometry.conus_height
//     );
//     context.lineTo(0, 0);
//     context.closePath();
//     // Konva specific method
//     context.fillStrokeShape(shape);
//   },
// });
// this._conus.setPosition({ x: 0, y: bunker_geometry.top_height });
