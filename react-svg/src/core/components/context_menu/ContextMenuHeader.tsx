import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContextMenuHeader({ children }: Props) {
  return (
    <li>
      <h6 className="dropdown-header">{children}</h6>
    </li>
  );
}
