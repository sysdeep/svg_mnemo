import { MouseEventHandler, useEffect, useMemo, useState } from "react";

type Props = {
  draggable?: boolean;
  onDragMove: (e: MouseEvent) => void;
};

export function useOnDrag({ onDragMove, draggable = true }: Props) {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (isDragging && draggable) {
        e.preventDefault();
        onDragMove(e);
      }
    }

    // function onMouseUp() {
    //   setIsDragging(false);
    // }

    window.addEventListener("mousemove", onMouseMove);
    // window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      //   window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, draggable]);

  //   return useMemo(() => {
  //     const onMouseDown: MouseEventHandler = () => {
  //       setIsDragging(true);
  //     };
  //     return { onMouseDown };
  //   }, []);

  function onMouseUp() {
    setIsDragging(false);
  }

  const onMouseDown: MouseEventHandler = () => {
    setIsDragging(true);
  };

  return { onMouseDown, onMouseUp };
}
