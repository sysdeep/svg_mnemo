export const filter_block_colorize_id = "block_colorize";
export const filter_uncontrol_colorize_id = "uncontrol_colorize";
export const filter_error_colorize_id = "error_colorize";
export const filter_none_colorize_id = "none_colorize";

export default function MainColorizeFilters() {
  return (
    <>
      <filter id={filter_block_colorize_id}>
        <feColorMatrix
          type="matrix"
          values="0 1 0 0 0
                  0 1 0 0 0
                  0 1 0 0 0
                  0 1 0 1 0 "
        />
      </filter>

      <filter id={filter_uncontrol_colorize_id}>
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  1 1 1 1 1
                  0 0 0 1 0 "
        />
      </filter>

      <filter id={filter_error_colorize_id}>
        <feColorMatrix
          type="matrix"
          values="1 1 1 1 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 1 0 "
        />
      </filter>

      <filter id={filter_none_colorize_id}>
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 1 0 "
        />
      </filter>
    </>
  );
}
