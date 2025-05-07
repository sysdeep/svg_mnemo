import { useEffect, useState } from "react";

type Props = {
  x: number;
  y: number;
  angle: number;
};

export default function Wheel({ x, y, angle }: Props) {
  const size = 36;
  const half_size = size / 2;

  const ox = x + half_size;
  const oy = y + half_size;

  return (
    <g transform={`rotate(${angle} ${ox} ${oy})`}>
      {/* // <g> */}
      {/* <!-- // спицы --> */}
      <line
        x1={x + 2}
        y1={y + half_size}
        x2={x + size - 2}
        y2={y + half_size}
        strokeWidth="4"
        stroke="#9D4C16"
      />

      <line
        x1={x + half_size}
        y1={y + 2}
        x2={x + half_size}
        y2={y + size - 2}
        strokeWidth="4"
        stroke="#9D4C16"
      />

      {/* <!-- // big circle --> */}
      <circle
        r={half_size}
        cx={x + half_size}
        cy={y + half_size}
        strokeWidth="4"
        stroke="#9D4C16"
        fill="none"
      />

      {/* <!-- // inner big circle --> */}
      <circle
        r={8}
        cx={x + half_size}
        cy={y + half_size}
        strokeWidth="3"
        stroke="#9D4C16"
        fill="none"
      />

      {/* <!-- // inner gray border --> */}
      <circle r={5} cx={x + half_size} cy={y + half_size} fill="#d8d8d8" />

      {/* <!-- // inner black dot --> */}
      <circle r={4} cx={x + half_size} cy={y + half_size} fill="#5b514a" />
    </g>
  );
}
