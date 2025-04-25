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

  const defs = colors_map[color];
  const [main_color, blick_color] = state ? defs[1] : defs[0];

  // тут проблема - градиенты используются вот в таком виде с помощью ссылок
  return (
    <g>
      <radialGradient
        id="lamp-radial-gradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="30%"
        fy="30%"
      >
        <stop offset="0%" stop-color={blick_color} />
        <stop offset="100%" stop-color={main_color} />
      </radialGradient>

      <circle
        cx={x + size / 2}
        cy={y + size / 2}
        r={size / 2}
        strokeWidth={size * PADDING_PRC}
        stroke={bg_color}
        fill="url(#lamp-radial-gradient)"
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

export enum LampColor {
  green,
  blue,
  red,
  gray,
  yellow,
}

// off(main, blick), on(main, blick)
const colors_map = {
  // # LampColor.green 	: (("#4d590d", "#9bbe89"), ("#8fd400", "#caffbb")),
  // # LampColor.green 	: (("#4d590d", "#9bbe89"), ("#8fd400", "#8eff6f")),

  [LampColor.green]: [
    ["#4d590d", "#9bbe89"],
    ["#8fd400", "#caffbb"],
  ],
  [LampColor.blue]: [
    ["#01648e", "#aaaaaa"],
    ["#5fdaff", "#d2edf6"],
  ],
  [LampColor.red]: [
    ["#890500", "#c52a2a"],
    ["#ff1616", "#f76262"],
  ],
  [LampColor.gray]: [
    ["#424848", "#afafaf"],
    ["#9c9d9d", "#d7d7d7"],
  ],
  // # LampColor.yellow 	: [["#faff34", "#feffe3"], ["#dfd40f", "#ecf0b9"]],
  [LampColor.yellow]: [
    ["#ca8a04", "#feffe3"],
    ["#fef08a", "#ecf0b9"],
  ],
};
