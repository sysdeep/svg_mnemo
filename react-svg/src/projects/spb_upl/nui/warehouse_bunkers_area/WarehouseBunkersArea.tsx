import WarehouseBunker, {
  WarehouseBunkerRect,
} from "../warehouse_bunker/WarehouseBunker";
import WarehouseBunkersAreaCompose from "./WarehouseBunkersAreaCompose";

type Props = {
  x: number;
  y: number;
  ctrl: WarehouseBunkersAreaCompose;
};

export const WarehouseBunkersAreaRect = {
  width: WarehouseBunkerRect.width * 4 + 4,
  height: WarehouseBunkerRect.height + 4,
};

export default function WarehouseBunkersArea({ x, y, ctrl }: Props) {
  return (
    <g>
      {/* <rect
        x={x}
        y={y}
        width={WarehouseBunkersAreaRect.width}
        height={WarehouseBunkersAreaRect.height}
        stroke="green"
        strokeWidth={1}
        fill="none"
      /> */}

      {/* bunkers */}
      {ctrl.bunkers.map((bm, i) => {
        return (
          <WarehouseBunker
            x={x + i * WarehouseBunkerRect.width}
            y={y}
            ctrl={bm}
            key={i}
          />
        );
      })}
    </g>
  );
}
