import { PackageOdata } from "./package_odata";

export const WSEvent: { [key: string]: number } = {
  opened: 1,
  closed: 2,
};

export interface WSEventHandler {
  (): void;
}

export interface WSClientInterface {
  get_connection_status(): boolean;
  connect(): void;
  disconnect(): void;
  send(payload: PackageOdata): void;

  connect_events(ev: number, handler: WSEventHandler): void;
  disconnect_events(ev: number, handler: WSEventHandler): void;
}
