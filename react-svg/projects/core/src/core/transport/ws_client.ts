import { IHandlerOdata } from "./handler_odata";
import { PackageOdata } from "./package_odata";

export class WSClient {
  private _connection_string: string;
  _socket: WebSocket | null = null;
  _handler_odata: IHandlerOdata | null = null;
  _example_message_event_handler: Function | null = null;

  constructor(url: string) {
    this._connection_string = url;
  }

  start() {
    this._socket = new WebSocket(this._connection_string);

    this._socket.onopen = () => {
      console.log("ws opened");
      // this._simple_send();
    };

    this._socket.onclose = () => {
      console.log("ws closed");
      this._socket = null;
    };

    this._socket.onmessage = (e: any) => {
      // console.log("ws message");
      // console.log(e.data);
      this._process_message(e.data);
    };
  }

  connect_odata(handler: IHandlerOdata) {
    this._handler_odata = handler;
    handler.connect_odata((payload: PackageOdata) => this._on_obj_data_from_project(payload));
  }

  // TODO: remove
  // connect_message_event(handler: Function) {
  //   this._example_message_event_handler = handler;
  // }

  // _simple_send() {
  //   if (this._socket) {
  //     this._socket.send("example from js: " + String(new Date()));
  //   }
  // }

  _process_message(data: string) {
    const jdata = JSON.parse(data);

    switch (jdata.package_type) {
      case 1:
        // process obj data
        this._process_obj_data(jdata);
        break;
      default:
        console.warn("unsuported message: ", jdata);
    }

    console.log(jdata);

    // TODO: remove
    // if (this._example_message_event_handler) {
    //   this._example_message_event_handler(data);
    // }
  }

  _process_obj_data(payload: any) {
    const pack: PackageOdata = {
      sys_id: payload.sys_id,
      attrs: payload.attrs.map((a: any) => ({ attr_id: a.attr_id, value: a.value })),
    };

    if (this._handler_odata) {
      this._handler_odata.set_odata(pack);
    }
  }

  // from project
  _on_obj_data_from_project(payload: PackageOdata) {
    const msg = {
      ...payload,
      package_type: 1,
    };

    console.log(msg);

    if (this._socket) {
      this._socket.send(JSON.stringify(msg));
    } else {
      console.warn("no socket!!!");
    }
  }
}
