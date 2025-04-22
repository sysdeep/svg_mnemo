import { G } from "@svgdotjs/svg.js";
import Sensor from "../../views/Sensor";
import DSensorInterface from "./dsensor_interface";

export default class DSensorView extends G implements DSensorInterface {
  private _sensor: Sensor;
  private is_active: boolean;
  private is_error: boolean;

  constructor() {
    super();

    this._sensor = new Sensor(12, "green");

    this.add(this._sensor);
    // this.add(new Sensor().move(10, 140));
    // this.add(new Sensor().move(-10, 140));

    this.is_active = false;
    this.is_error = false;

    this._update();
  }

  set_state(st: boolean): void {
    this.is_active = st;
    this._update();
  }

  set_error(st: boolean): void {
    this.is_error = st;
    this._update();
  }

  private _update() {
    let color = this._get_color();
    this._sensor.set_color(color);
  }

  private _get_color(): string {
    if (this.is_error) return "red";

    if (this.is_active) return "green";

    return "yellow";
  }
}
