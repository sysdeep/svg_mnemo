import { SyntheticEvent, useState } from "react";
import MotorPage from "./pages/MotorPage";
import DSensorPage from "./pages/DSensorPage";

import "winbox/dist/css/winbox.min.css"; // required
import "winbox/dist/css/themes/modern.min.css"; // optional
import WinBox from "react-winbox";

const pages = [
  {
    name: "views",
    items: [
      { title: "Motor", component: () => <MotorPage /> },
      { title: "DSensor", component: () => <DSensorPage /> },
    ],
  },
];

export default function AppDev() {
  const [curComponent, setCurComponent] = useState<number[]>([0, 0]);
  const on_select = (
    e: SyntheticEvent,
    section_index: number,
    item_index: number
  ) => {
    e.preventDefault();
    setCurComponent([section_index, item_index]);
  };

  return (
    <div>
      <h1>dev</h1>
      <ul>
        <li>
          <a href="/">main</a>
        </li>
      </ul>

      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top" }}>
              {pages.map((section, i) => {
                return (
                  <ul key={i}>
                    <li>{section.name}</li>
                    <li>
                      <ul>
                        {section.items.map((item, j) => {
                          return (
                            <li key={j}>
                              <a href="#" onClick={(e) => on_select(e, i, j)}>
                                {item.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                );
              })}
            </td>
            <td>{pages[curComponent[0]].items[curComponent[1]].component()}</td>
          </tr>
        </tbody>
      </table>

      <div></div>
      <WinBoxTest />
      <WinBoxesTest />
    </div>
  );
}

function WinBoxTest() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open window</button>
      {isOpen && (
        <WinBox
          width={500}
          height={300}
          x="center"
          y={30}
          // noClose={this.state.inEditing}
          onClose={() => setIsOpen(false)}
        >
          <div>
            <h1>Hello, WinBox!</h1>
          </div>
        </WinBox>
      )}
    </div>
  );
}

function WinBoxesTest() {
  const [windows, setWindows] = useState<number[]>([]);
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (force: boolean, index: number) => {
    let state = [...windows];
    // const index = state.findIndex((info) => info.id === id);
    if (index === -1) return;
    // if (state[index].onclose && state[index].onclose(force)) return true;
    // window-specific onclose, returns true if it does not need the default close process.
    state.splice(index, 1);
    setTimeout(() => setWindows(state)); // to change winbox showing state while `onclose`, MUST wrap it within `setTimeout`
  };

  return (
    <div>
      <button onClick={() => setWindows([...windows, 1])}>add window</button>
      {windows.map((info, i) => (
        <WinBox key={i} id={`${i}`} onClose={(force) => handleClose(force, i)}>
          <div>Some children: {info}</div>
        </WinBox>
      ))}
    </div>
  );
}
