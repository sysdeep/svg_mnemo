export enum LampColor {
  green,
  blue,
  red,
  gray,
  yellow,
}

export const colors_list = [
  LampColor.green,
  LampColor.red,
  LampColor.blue,
  LampColor.gray,
  LampColor.yellow,
];

// off(main, blick), on(main, blick)
export const colors_map = {
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

export function get_lamp_colors(color: LampColor, state: boolean): string[] {
  const colors = colors_map[color];
  return state ? colors[1] : colors[0];
}

export function make_lamp_color_id(color: LampColor, state: boolean): string {
  const [color_main, color_blick] = get_lamp_colors(color, state);
  const colors_id = color_main.slice(1) + color_blick.slice(1);
  return "lamp_radial_gradient_" + colors_id;
}
