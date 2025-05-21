import Button from "./Button";
import ErrorRow from "./ErrorRow";
import { BODY_COLOR } from "./modal_data";
import ModalTitle from "./ModalTitle";

type Props = {
  x: number;
  y: number;
};

export default function ObjErrorsModal({ x, y }: Props) {
  const max_width = 300;
  const max_height = 150;
  const title_height = 24;
  const error_height = 24;
  const test_errors = ["Error 1", "Some more error", "more error again"];

  const on_close = () => {
    console.log("close");
  };

  return (
    <g>
      <rect x={x} y={y} width={max_width} height={max_height} fill={BODY_COLOR} fillOpacity={0.8} />
      <ModalTitle x={x} y={y} width={max_width} height={title_height} title="Modal!!!" />

      {test_errors.map((err: string, i: number) => {
        return (
          <ErrorRow
            x={x + 4}
            y={y + title_height + 4 + (error_height + 4) * i}
            width={max_width - 4 * 2}
            height={error_height}
            text={err}
            key={i}
          />
        );
      })}

      {/* buttons */}
      <Button x={x + 4} y={y + max_height - 4 - 24} text={"Close"} onClick={on_close} />
    </g>
  );
}
