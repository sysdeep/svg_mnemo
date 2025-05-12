import WarehouseBunker from "../warehouse_bunker/WarehouseBunker";
import { WarehouseBunkerRect } from "../warehouse_bunker/WarehouseBunkerVM";
import WarehouseBunkersAreaCtrl from "./WarehouseBunkersAreaCtrl";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseBunkersAreaCtrl;
};

const x_padding = 8;
const y_padding = 2;

export const WarehouseBunkersAreaRect = {
  width: WarehouseBunkerRect.width * 4 + 5 * x_padding,
  height: WarehouseBunkerRect.height + y_padding * 2,
};

export default function WarehouseBunkersArea({ x, y, ctrl }: Props) {
  const debug_rect = false;
  return (
    <g>
      {debug_rect && (
        <rect
          x={x}
          y={y}
          width={WarehouseBunkersAreaRect.width}
          height={WarehouseBunkersAreaRect.height}
          stroke="green"
          strokeWidth={1}
          fill="none"
        />
      )}

      {/* bunkers */}
      {ctrl.bunkers.map((bm, i) => {
        return (
          <WarehouseBunker
            x={x + x_padding + i * (WarehouseBunkerRect.width + x_padding)}
            y={y + y_padding}
            ctrl={bm}
            key={i}
          />
        );
      })}
    </g>
  );
}
