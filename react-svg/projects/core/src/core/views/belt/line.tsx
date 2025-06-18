import { useEffect, useState } from "react";

type Props = {
  x: number;
  y: number;
  chunks_count: number;
  angle: number;
  is_forward: boolean;
};

export default function Line({ x, y, chunks_count, angle, is_forward }: Props) {
  const [chunks, setChunks] = useState<Chunk[]>(make_chunks(chunks_count));

  useEffect(() => {
    setChunks((current) => rotate(current, 1, is_forward));
  }, [angle, is_forward]);

  const chunk_size = 16;
  return (
    <g>
      {chunks.map((c, i) => {
        return (
          <line
            key={c.cid}
            x1={x + i * chunk_size}
            y1={y}
            x2={x + i * chunk_size + chunk_size}
            y2={y}
            stroke={c.color}
            strokeWidth="3"
          />
        );
      })}
    </g>
  );
}

type Chunk = {
  cid: number;
  color: string;
};

function make_chunks(chunks_count: number): Chunk[] {
  let cks: Chunk[] = [];
  let c_counter = 0;
  for (let i = 0; i < chunks_count; i++) {
    // let color = c_counter % 3 ? "#984000" : "#8A3A00"
    let color = c_counter % 3 ? "#8A3A00" : "yellow";
    cks.push({
      cid: i,
      color: color,
    });

    c_counter++;
  }

  return cks;
}

function rotate<X>(items: Iterable<X>, rots: number, is_forward: boolean): X[] {
  let result = [...items];
  while (rots > 0) {
    if (is_forward) {
      result = [
        ...result.slice(result.length - 1, result.length),
        ...result.slice(0, result.length - 1),
      ];
    } else {
      result = [...result.slice(1, result.length), ...result.slice(0, 1)];
    }
    rots--;
  }
  return result;
}
