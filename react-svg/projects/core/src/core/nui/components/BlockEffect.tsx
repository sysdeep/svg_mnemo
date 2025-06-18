import { ReactNode } from "react";
import {
  filter_block_colorize_id,
  filter_none_colorize_id,
} from "../../views/common/MainColorizeFilters";

type Props = {
  children: ReactNode;
  st: boolean;
};

/**
 * Эффект блокировки - серая окраска
 */
export default function BlockEffect({ children, st }: Props) {
  const filter = st ? filter_block_colorize_id : filter_none_colorize_id;
  return <g filter={`url(#${filter})`}>{children}</g>;
}
