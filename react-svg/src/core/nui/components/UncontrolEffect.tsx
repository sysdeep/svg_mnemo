import { ReactNode } from "react";
import { filter_none_colorize_id, filter_uncontrol_colorize_id } from "../../views/common/MainColorizeFilters";

type Props = {
  children: ReactNode;
  st: boolean;
};

/**
 * Эффект снятия контроля - синяя окраска
 */
export default function UncontrolEffect({ children, st }: Props) {
  const filter = st ? filter_uncontrol_colorize_id : filter_none_colorize_id;
  return <g filter={`url(#${filter})`}>{children}</g>;
}
