import {
  colors_list,
  get_lamp_colors,
  make_lamp_color_id,
  type LampColor,
} from "./lamp_color";

/**
 * создание градиентов для лампочек
 */
export default function LampGradients() {
  return (
    <>
      {colors_list.map((c, i) => {
        return [true, false].map((t, j) => {
          return <LampGradient color={c} state={t} key={`${i}_${j}`} />;
        });
      })}
    </>
  );
}

function LampGradient({ color, state }: { color: LampColor; state: boolean }) {
  const gradiant_id = make_lamp_color_id(color, state);
  const [color_main, color_blick] = get_lamp_colors(color, state);

  return (
    <radialGradient
      id={gradiant_id}
      cx="50%"
      cy="50%"
      r="50%"
      fx="30%"
      fy="30%"
    >
      <stop offset="0%" stopColor={color_blick} />
      <stop offset="100%" stopColor={color_main} />
    </radialGradient>
  );
}
