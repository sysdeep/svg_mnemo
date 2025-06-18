import { useCallback, useState } from "react";
import Button from "./Button";
import { ErrorModel } from "./ErrorModel";
import ErrorRow from "./ErrorRow";
import { BODY_COLOR } from "./modal_data";
import ModalTitle from "./ModalTitle";
import { useOnDrag } from "./useOnDrag";

type Props = {
  x: number;
  y: number;

  // TODO
  // obj: ---
  // title: string
  // description: string
  // items: string[]
  // onClose: () => void
};

type Pos = {
  left: number;
  top: number;
};

/**
 * обвязка для перемещения, сам модал ниже
 */
export default function ObjErrorsModal({ x, y }: Props) {
  const [pos, setPos] = useState<Pos>({ left: 0, top: 0 });

  const onDragMove = useCallback((e: MouseEvent) => {
    setPos((p) => ({ ...p, left: p.left + e.movementX, top: p.top + e.movementY }));
    // setProperties((properties) => ({
    //   ...properties,
    //   top: minMax(0, properties.top + e.movementY, window.innerHeight - properties.height),
    //   left: minMax(0, properties.left + e.movementX, window.innerWidth - properties.width),
    // }));
  }, []);

  const { onMouseDown, onMouseUp } = useOnDrag({ draggable: true, onDragMove });

  return (
    <g onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <ObjErrorsModalBase x={x + pos.left} y={y + pos.top} />
    </g>
  );
}

// TODO: доделать
function ObjErrorsModalBase({ x, y }: Props) {
  const max_width = 460;
  const max_height = 250;
  const title_height = 24;
  const error_height = 48;
  const test_errors: ErrorModel[] = [
    { text: "Error 1", err_no: 1, err_name: "q1" },
    { text: "Some more error", err_no: 2, err_name: "q2" },
    { text: "more error again", err_no: 3, err_name: "q3" },
  ];

  const on_close = () => {
    console.log("close");
  };
  const on_confirm = (err_no: number) => {
    console.log(err_no);
  };

  // #--- ebox items
  // 	self.items_box = ItemsContainer(parent=self)

  const button_width = 120;
  const button_height = 24;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={max_width}
        height={max_height}
        fill={BODY_COLOR}
        // fillOpacity={0.8}
        filter="url(#shadow)"
      />
      <ModalTitle x={x} y={y} width={max_width} height={title_height} title="Modal!!!" />
      {test_errors.map((err: ErrorModel, i: number) => {
        return (
          <ErrorRow
            x={x + 4}
            y={y + title_height + 4 + (error_height + 4) * i}
            width={max_width - 4 * 2}
            height={error_height}
            error={err}
            key={i}
            onConfirm={on_confirm}
          />
        );
      })}

      {/* #--- action bar 
      self.actions_box = ActionBar(parent=self) 
      self.actions_box.add_button("Подтвердить", self.__close_action_all, description="Подтвердить все ошибки") */}
      {/* buttons */}
      <Button
        x={x + max_width - button_width - 4}
        y={y + max_height - 4 - 24}
        width={button_width}
        height={button_height}
        onClick={on_close}
        title="Подтвердить все ошибки">
        Подтвердить все
      </Button>
    </g>
  );
}
