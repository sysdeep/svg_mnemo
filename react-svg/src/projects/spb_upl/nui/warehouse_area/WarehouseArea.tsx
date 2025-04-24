import WarehouseLine from "../warehouse_line/WarehouseLine";

type Props = {
  x: number;
  y: number;
};

export default function WarehouseArea({ x, y }: Props) {
  return (
    <g>
      {/* <rect
        x={x}
        y={y}
        width={400}
        height={400}
        stroke="black"
        strokeWidth={1}
        fill="none"
      /> */}

      {[...Array(3)].map((_, i) => {
        return <WarehouseLine x={x} y={y + 200 * i} key={i} />;
      })}
    </g>
  );
  // this._body = new Rect({
  //   width: this.max_width,
  //   height: this.max_height,
  //   //   fill: "red",
  //   stroke: "black",
  //   strokeWidth: 1,
  // });
  // this.add(this._body);
  // // lines
  // let line_x = 0;
  // let line_y = 0;
  // for (let i = 0; i < 3; i++) {
  //   let line = new WarehouseLineView();
  //   line.setPosition({ x: line_x, y: line_y });
  //   this._lines.push(line);
  //   this.add(line);
  //   line_y += line.max_height;
  // }
}
