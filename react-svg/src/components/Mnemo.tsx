import MainSupplyView from "../units/main_supply/MainSupplyView";
import MotorView from "../units/motor/MotorView";
import AppCompose from "../units/app/AppCompose";
import PaletteGrid from "./PaletteGrid";

export type MnemoState = {
  app_model: AppCompose;
};

// const motor_compose = new MotorCompose();

export default function Mnemo({ app_model }: MnemoState) {
  // const [state, setState] = useState<MainSupplyModel>(
  //   () => new MainSupplyModel()
  // );

  // useEffect(() => {
  //   // let iint = setInterval(() => {
  //   //   motor_compose.set_state({
  //   //     ...motor_compose.value,
  //   //     is_error: !motor_compose.value.is_error,
  //   //   });
  //   // }, 1200);
  //   // return () => clearInterval(iint);
  //   //   let int = setInterval(() => {
  //   //     for (let s of state.sensors) {
  //   //       s.set_color(!s.get_color());
  //   //     }
  //   //     // if (state.s1.get_color() === "blue") {
  //   //     //   state.s1.set_color("yellow");
  //   //     // } else {
  //   //     //   state.s1.set_color("blue");
  //   //     // }
  //   //   }, 1000);
  //   //   return () => clearInterval(int);
  // }, []);

  return (
    <svg viewBox="0 0 300 300" width={300} height={300}>
      <MainSupplyView x={100} y={100} vm={app_model.main_supply} />
      <MotorView x={160} y={150} vm={app_model.motor} />

      <PaletteGrid x={0} y={0} />
    </svg>
  );
}
