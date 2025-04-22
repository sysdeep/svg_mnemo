import { G } from "@svgdotjs/svg.js";
import DSensorView from "../nui/units/dsensor/dsensor_view";

export default class SMnemo extends G {
  private st: boolean;
  constructor() {
    super();
    console.log("smnemo crated");
    // new Sensor().move(20, 20).addTo(this);

    const s = new DSensorView().move(30, 30);
    this.add(s);

    this.st = false;
    setInterval(() => {
      this.st = !this.st;
      s.set_state(this.st);
    }, 1000);
  }
}
