import { main_gradient_id } from "../common/MainGradient";
import BunkerGeometry from "./bunker_geometry";
import {
  middle_line_gradient_id,
  out_line_gradient_id,
} from "./BunkerGradients";

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
  const gradient_url = `url(#${main_gradient_id})`;
  const out_line_gradient_url = `url(#${out_line_gradient_id})`;
  const middle_line_gradient_url = `url(#${middle_line_gradient_id})`;

  const conus_points = [
    [x + 0, y + geometry.top_height + 0],
    [x + geometry.max_width, y + geometry.top_height + 0],
    [
      x + geometry.max_width / 2 + geometry.out_width / 2,
      y + geometry.top_height + geometry.conus_height,
    ],
    [
      x + geometry.max_width / 2 - geometry.out_width / 2,
      y + geometry.top_height + geometry.conus_height,
    ],
  ]
    .map((pair) => pair.join(","))
    .join(" ");

  return (
    <g>
      {/* top frame */}
      <rect
        width={geometry.max_width}
        height={geometry.top_height}
        x={x}
        y={y}
        fill={gradient_url}
      />

      {/* conus */}
      <polygon points={conus_points} fill={gradient_url} />

      {/* out line */}
      <rect
        x={x + (geometry.max_width - geometry.out_width) / 2}
        y={y + geometry.top_height + geometry.conus_height - 2}
        width={geometry.out_width}
        height={2}
        fill={out_line_gradient_url}
      />

      {/* middle line */}
      <rect
        x={x}
        y={y + geometry.top_height - 2}
        width={geometry.max_width}
        height={2}
        fill={middle_line_gradient_url}
      />
    </g>
  );
}
