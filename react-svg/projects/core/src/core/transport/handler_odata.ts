import { PackageOdata } from "./package_odata";
import { WSClientInterface } from "./ws_client_interface";

// export interface ServerHandler {
//   (data: PackageOdata): void;
// }

export interface IHandlerOdata {
  set_odata(data: PackageOdata): void;
  // connect_odata(cb: ServerHandler): void;

  set_client(client: WSClientInterface): void;
  get_client(): WSClientInterface | null;
}
