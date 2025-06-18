import { useEffect, useState } from "react";

export default function useContextMenu() {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleClick = () => setClicked(false);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const onContextMenu = (e: any) => {
    e.preventDefault();
    // console.log("wh cm called", e.pageX, e.pageY);
    setClicked(true);
    // TODO: позиционирование контекстного меню
    // NOTE: это событие от svg элемента, нужно как то получить значение самого меню
    console.log(e.view.innerHeight, e.view.innerWidth);
    setPoints({ x: e.pageX, y: e.pageY });
  };

  return {
    clicked,
    // setClicked,
    points,
    // setPoints,
    onContextMenu,
  };
}
