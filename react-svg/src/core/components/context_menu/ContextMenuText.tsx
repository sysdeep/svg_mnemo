import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContextMenuText({ children }: Props) {
  return (
    <li>
      <span className="dropdown-item-text">{children}</span>
    </li>
  );
}
