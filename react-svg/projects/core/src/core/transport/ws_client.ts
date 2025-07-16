import { IHandlerOdata } from "./handler_odata";
import { PackageOdata } from "./package_odata";
import { WSClientInterface, WSEvent, WSEventHandler } from "./ws_client_interface";

export class WSClient implements WSClientInterface {
  private _connection_string: string;
  _socket: WebSocket | null = null;
  _handler_odata: IHandlerOdata | null = null;
  _example_message_event_handler: Function | null = null;

  events_handlers: { [key: number]: WSEventHandler[] } = {};

  constructor(url: string) {
    this._connection_string = url;
  }

  start() {
    this._socket = new WebSocket(this._connection_string);

    this._socket.onopen = () => {
      console.log("ws opened");
      // this._simple_send();
      let handlers = this.events_handlers[WSEvent.opened] || [];
      for (let h of handlers) {
        h();
      }
    };

    this._socket.onclose = () => {
      console.log("ws closed");
      this._socket = null;

      let handlers = this.events_handlers[WSEvent.closed] || [];
      for (let h of handlers) {
        h();
      }
    };

    this._socket.onmessage = (e: any) => {
      // console.log("ws message");
      // console.log(e.data);
      this._process_message(e.data);
    };
  }

  connect_odata(handler: IHandlerOdata) {
    this._handler_odata = handler;
    handler.set_client(this);
    // handler.connect_odata((payload: PackageOdata) => this._on_obj_data_from_project(payload));
  }

  // ws client interface ------------------------------------------------------
  get_connection_status(): boolean {
    return Boolean(this._socket);
  }

  connect() {
    console.log("try connect");
    if (this._socket) {
      console.log("already connected, pass");
      return;
    }

    this.start();
  }

  disconnect(): void {
    if (!this._socket) {
      return;
    }

    this._socket.close();
  }

  send(payload: PackageOdata): void {
    this._on_obj_data_from_project(payload);
  }

  connect_events(ev: number, handler: WSEventHandler): void {
    let handlers = this.events_handlers[ev];
    if (!handlers) {
      this.events_handlers[ev] = [];
    }

    this.events_handlers[ev].push(handler);
  }

  disconnect_events(ev: number, handler: WSEventHandler): void {
    this.events_handlers[ev] = this.events_handlers[ev].filter((h) => h !== handler);
  }

  // self ---------------------------------------------------------------------

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
