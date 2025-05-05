import { ReactElement, ReactNode } from "react";
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

function DDMenu({
  children,
  top,
  left,
}: {
  children: ReactNode;
  top: number;
  left: number;
}) {
  return (
    <ul
      className="dropdown-menu"
      style={{ display: "block", top: top, left: left }}
    >
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
