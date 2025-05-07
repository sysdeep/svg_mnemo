import { colors_map, LampColor, make_lamp_color_id } from "./lamp_color";

type Props = {
  x: number;
  y: number;
  color: LampColor;
  state: boolean;
  size: number;
};

const BG_COLOR = "#e9e9e9";
const PADDING_PRC = 0.1;

export default function Lamp({ x, y, color, state, size }: Props) {
  const bg_color = state ? colors_map[color][0][0] : BG_COLOR;

  const gid = make_lamp_color_id(color, state);
  // тут проблема - градиенты используются вот в таком виде с помощью ссылок
  return (
    <g>
      <circle
        cx={x + size / 2}
        cy={y + size / 2}
        r={size / 2}
        strokeWidth={size * PADDING_PRC}
        stroke={bg_color}
        fill={`url(#${gid})`}
      />
    </g>
  );
}

//   constructor(size: number, primary_color: LampColor) {
//     super();

//     // start
//     this.set_color(primary_color);
//   }

//   // public -------------------------------------------------------------------
//   set_color(color: LampColor) {
//     this.current_color = color;
//     this._update_color();
//   }

//   set_state(st: boolean): void {
//     this.state = st;
//     this._update_color();
//   }

//   set_color_state(color: LampColor, state: boolean) {
//     this.current_color = color;
//     this.state = state;
//     this._update_color();
//   }

//   // self ---------------------------------------------------------------------

//   // TODO: use setAttrs - https://konvajs.org/docs/styling/Fill.html
//   private _update_color() {
//     let defs = colors_map[this.current_color];

//     let colors_pair = this.state ? defs[1] : defs[0];

//     let stroke_color = this._get_bg_color();
//     this._body.setAttr("stroke", stroke_color);

//     // TODO: что то не очень.. но да ладно, пока оставим как есть
//     this._body.setAttr("fillRadialGradientStartPoint", {
//       x: this.max_size / 1,
//       y: this.max_size / 1,
//     });
//     this._body.setAttr("fillRadialGradientStartRadius", 0);
//     this._body.setAttr("fillRadialGradientEndPoint", {
//       x: this.max_size / 2,
//       y: this.max_size / 2,
//     });
//     this._body.setAttr("fillRadialGradientEndRadius", this.max_size / 1);

//     this._body.setAttr("fillRadialGradientColorStops", [
//       0,
//       colors_pair[1],
//       1,
//       colors_pair[0],
//     ]);
//   }

// }
