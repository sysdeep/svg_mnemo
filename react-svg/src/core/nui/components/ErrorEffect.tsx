import { ReactNode } from "react";
import {
  filter_error_colorize_id,
  filter_none_colorize_id,
} from "../../views/common/MainColorizeFilters";

type Props = {
  children: ReactNode;
  st: boolean;
};

/**
 * Эффект ошибки - красная окраска
 */
export default function ErrorEffect({ children, st }: Props) {
  const filter = st ? filter_error_colorize_id : filter_none_colorize_id;
  return <g filter={`url(#${filter})`}>{children}</g>;
}
