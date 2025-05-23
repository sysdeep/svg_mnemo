import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function ContextMenuAction({ children, onClick }: Props) {
  const on_click = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
  };
  return (
    <li>
      <a className="dropdown-item" href="#" onClick={on_click}>
        {children}
      </a>
    </li>
  );
}
