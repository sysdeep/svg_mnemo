import { ColorEnum, get_color, ToneEnum } from "../core/nui/lib/palette";

export default function PaletteGrid({ x, y }: { x: number; y: number }) {
  const grid = Object.keys(ColorEnum).map((ce, ci) => {
    const ry = y + ci * 18;
    return Object.keys(ToneEnum).map((te, ti) => {
      const rx = x + ti * 18;
      const color = get_color(ce, te);
      return <ColorBox x={rx} y={ry} color={color} key={`${ci}-${ti}`} />;
    });
  });

  return <g>{grid}</g>;
}

function ColorBox({ x, y, color }: { x: number; y: number; color: string }) {
  return <rect x={x} y={y} width={16} height={16} rx={2} fill={color} />;
}
