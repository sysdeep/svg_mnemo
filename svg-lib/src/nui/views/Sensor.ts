import { Circle, G } from "@svgdotjs/svg.js";

export default class Sensor extends G {
  private _body: Circle;
  constructor(size: number, color: string) {
    super();
    this._body = this.circle()
      .radius(size / 2)
      .fill(color);
  }

  set_color(color: string) {
    this._body.fill(color);
  }
}
