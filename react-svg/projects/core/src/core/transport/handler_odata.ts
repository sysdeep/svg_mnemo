import { PackageOdata } from "./package_odata";

export interface ServerHandler {
  (data: PackageOdata): void;
}

export interface IHandlerOdata {
  set_odata(data: PackageOdata): void;
  connect_odata(cb: ServerHandler): void;
}
