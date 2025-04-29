import { SyntheticEvent, useState } from "react";
import MotorPage from "./pages/MotorPage";
import DSensorPage from "./pages/DSensorPage";

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
    </div>
  );
}
