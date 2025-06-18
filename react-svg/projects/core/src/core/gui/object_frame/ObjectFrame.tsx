import { useState } from "react";
import ModelInterface from "../../models/ModelInterface";
import EmuFrame from "./emu_frame/EmuFrame";
import InfoFrame from "./info_frame/InfoFrame";
import PackagesFrame from "./packages_frame/PackagesFrame";
import SystemFrame from "./system_frame/SystemFrame";
import EventsFrame from "./events_frame/EventsFrame";
import HistoryFrame from "./history_frame/HistoryFrame";

type Props = {
  obj: ModelInterface;
};

const pages = [
  {
    name: "Info",
    component: (obj: ModelInterface) => <InfoFrame obj={obj} />,
  },

  {
    name: "Emu",
    component: (obj: ModelInterface) => <EmuFrame obj={obj} />,
  },
  {
    name: "Packages",
    component: (obj: ModelInterface) => <PackagesFrame obj={obj} />,
  },
  {
    name: "System",
    component: (obj: ModelInterface) => <SystemFrame obj={obj} />,
  },
  {
    name: "Events",
    component: (obj: ModelInterface) => <EventsFrame obj={obj} />,
  },
  {
    name: "History",
    component: (obj: ModelInterface) => <HistoryFrame obj={obj} />,
  },
];

export default function ObjectFrame({ obj }: Props) {
  const [index, setIndex] = useState<number>(0);

  const on_select = (e: any, item_index: number) => {
    e.preventDefault();
    setIndex(item_index);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div>
          <ul className="nav nav-tabs">
            {pages.map((page, i) => {
              const a_class = i === index ? "nav-link active" : "nav-link";
              return (
                <li className="nav-item" key={i}>
                  {/* TODO */}
                  {/* <a className="nav-link active" aria-current="page" href="#"></a> */}
                  <a
                    className={a_class}
                    aria-current="page"
                    href="#"
                    onClick={(e) => on_select(e, i)}
                  >
                    {page.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>{pages[index].component(obj)}</div>
      </div>
    </div>
  );
}
