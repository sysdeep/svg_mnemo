import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  active: boolean;
  top: number;
  left: number;
};

export default function ContextMenu({ children, active, top, left }: Props) {
  return (
    <>
      {active &&
        createPortal(
          <DDMenu top={top} left={left}>
            {children}
          </DDMenu>,
          document.body
        )}
    </>
  );
}

// TODO: если кликать на другие элементы то возникает несколько окон
/**
 * отображение меню
 * при создании отображается за пределами, далее вычисляется размер меню и геметрия окна,
 * если при заданных координатах меню выезжает за пределы, корректируем координаты
 */
function DDMenu({ children, top, left }: { children: ReactNode; top: number; left: number }) {
  const menuRef = useRef<HTMLUListElement>(null);
  const [correctLeft, setCorrectLeft] = useState<number>(-1000);
  const [correctTop, setCorrectTop] = useState<number>(-1000);

  useEffect(() => {
    if (menuRef.current) {
      let dims = menuRef.current.getBoundingClientRect();

      let max_width = menuRef.current.parentElement ? menuRef.current.parentElement.clientWidth : 0;
      let max_height = menuRef.current.parentElement ? menuRef.current.parentElement.clientHeight : 0;

      if (left + dims.width > max_width) {
        left = max_width - dims.width;
      }

      if (top + dims.height > max_height) {
        top = max_height - dims.height;
      }

      setCorrectLeft(left);
      setCorrectTop(top);
    }
  }, [menuRef]);

  return (
    <ul className="dropdown-menu" ref={menuRef} style={{ display: "block", top: correctTop, left: correctLeft }}>
      {children}
      {/* <li>
        <span className="dropdown-item-text">Dropdown item text</span>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li> */}
    </ul>
  );
}
