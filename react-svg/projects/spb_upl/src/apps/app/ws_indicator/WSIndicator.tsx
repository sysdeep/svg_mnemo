import ProjectInterface from "@src/core/project/project_interface";
import { WSEvent } from "@src/core/transport/ws_client_interface";
import { useEffect, useState } from "react";

type Props = {
  project: ProjectInterface;
};

export default function WSIndicator({ project }: Props) {
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    const client = project.get_client();

    if (client) {
      setConnected(client.get_connection_status());
    }

    const on_opened = () => setConnected(true);
    const on_closed = () => setConnected(false);

    project.get_client()?.connect_events(WSEvent.opened, on_opened);
    project.get_client()?.connect_events(WSEvent.closed, on_closed);

    return () => {
      project.get_client()?.disconnect_events(WSEvent.opened, on_opened);
      project.get_client()?.disconnect_events(WSEvent.closed, on_closed);
    };
  }, []);

  const try_connect = () => {
    const client = project.get_client();
    if (client) {
      client.connect();
    }
  };

  let color = connected ? "green" : "red";

  return (
    <g>
      <rect
        x={10}
        y={10}
        width={24}
        height={24}
        rx={5}
        fillOpacity={0.8}
        fill={color}
        onClick={() => try_connect()}></rect>
    </g>
  );
}
