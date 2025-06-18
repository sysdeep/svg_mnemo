import { useEffect, useState } from "react";
import { Amber } from "../../nui/lib/palette";

type Props = {
  x: number;
  y: number;
  active: boolean;
  on_press?: () => void;
  on_release?: () => void;
};

export default function VibroTray({ x, y, active, on_press, on_release }: Props) {
  const max_size = 24;
  const padding = 2;
  const paddings = [0, 1, 2, 3, 4];

  const frames: Frame[] = paddings.map((p) => {
    const size = max_size - p * padding * 2;
    return { size, is_active: false, p };
  });

  const [aindex, setAindex] = useState<number>(-1);
  const [hover, setHover] = useState<boolean>(false);

  const on_mouse_down = () => {
    on_press && on_press();
  };

  const on_mouse_up = () => {
    on_release && on_release();
  };

  useEffect(() => {
    let int: NodeJS.Timeout | null = null;

    if (active) {
      int = setInterval(() => {
        setAindex((i) => {
          return (i + 1) % paddings.length;
        });
      }, 300);
    }
    return () => {
      if (int) {
        clearInterval(int);
        int = null;
      }
    };
  }, [active, paddings]);

  const cursor = hover ? "pointer" : "arrow";

  return (
    <g
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      cursor={cursor}
      // onMouseDown={ond}
      onMouseDown={(e) => e.button === 0 && on_mouse_down()}
      onMouseUp={(e) => e.button === 0 && on_mouse_up()}>
      {frames.map((f, i) => {
        return (
          <rect
            key={i}
            x={x + f.p * 2}
            y={y + f.p * 2}
            width={f.size}
            height={f.size}
            fill={paddings.length - aindex === i ? Amber.p100 : Amber.p600}
            stroke={Amber.p800}
            strokeWidth={0.1}
          />
        );
      })}
    </g>
  );
}

type Frame = {
  size: number;
  p: number;
  is_active: boolean;
};
