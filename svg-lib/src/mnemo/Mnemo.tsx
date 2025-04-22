import { useEffect, useRef } from "react";

import { Rect, SVG } from "@svgdotjs/svg.js";
import SMnemo from "./SMnemo";

export default function Mnemo() {
  const svg = useRef<SVGSVGElement>(null);
  useEffect(() => {
    // console.log(svg);

    var draw = SVG(svg.current);
    // // draw.rect(100, 100).move(100, 50).fill("#f06");
    // draw.add(new Rect().size(30, 40).move(200, 200).fill("red").addTo(draw));
    // new Rect().size(20, 20).move(200, 100).fill("red").addTo(draw);
    new SMnemo().addTo(draw);
  }, []);

  return (
    <svg width={400} height={400} ref={svg}>
      <rect x={10} y={10} width={20} height={20} fill="red" />
    </svg>
  );
}
