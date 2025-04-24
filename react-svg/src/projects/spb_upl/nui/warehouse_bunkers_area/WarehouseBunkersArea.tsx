import WarehouseBunker, {
  WarehouseBunkerRect,
} from "../warehouse_bunker/WarehouseBunker";

type Props = {
  x: number;
  y: number;
};

export const WarehouseBunkersAreaRect = {
  width: WarehouseBunkerRect.width * 4 + 4,
  height: WarehouseBunkerRect.height + 4,
};

export default function WarehouseBunkersArea({ x, y }: Props) {
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
      {[...Array(4)].map((_, i) => {
        return (
          <WarehouseBunker
            x={x + i * WarehouseBunkerRect.width}
            y={y}
            key={i}
          />
        );
      })}
    </g>
  );
}
