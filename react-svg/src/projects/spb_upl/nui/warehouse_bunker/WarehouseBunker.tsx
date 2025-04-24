import Bunker from "../../../../views/bunker/bunker";
import BunkerGeometry from "../../../../views/bunker/bunker_geometry";
import VibroTray from "../../../../views/vibro_tray/vibro_tray";

type Props = {
  x: number;
  y: number;
};

export const WarehouseBunkerRect = {
  width: 3 * 28 + 2 * 4,
  height: 120,
};

export default function WarehouseBunker({ x, y }: Props) {
  const geo: BunkerGeometry = {
    max_width: WarehouseBunkerRect.width,
    conus_height: 30,
    out_width: 30,
    top_height: 90,
  };
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={WarehouseBunkerRect.width}
        height={WarehouseBunkerRect.height}
        stroke="blue"
        strokeWidth={1}
        fill="none"
      />

      <Bunker x={x} y={y} geometry={geo} />

      {/* vibrators */}
      {[...Array(1)].map((_, ix) => {
        return [...Array(1)].map((_, iy) => {
          return (
            <VibroTray
              x={x + 4 + ix * 30}
              y={y + 4 + iy * 30}
              key={ix + "-" + iy}
            />
          );
        });
      })}
    </g>
  );
}
