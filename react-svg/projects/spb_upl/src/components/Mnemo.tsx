import MainSupplyView from "../units/main_supply/MainSupplyView";
import MotorView from "../units/motor/MotorView";
import AppCompose from "../units/app/AppCompose";
import { Belt } from "../views/belt";
import VibroTray from "../views/vibro_tray/vibro_tray";

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
    <svg viewBox="0 0 600 500" width={600} height={500}>
      <MainSupplyView x={100} y={100} vm={app_model.main_supply} />
      <MotorView x={160} y={150} vm={app_model.motor} />

      {/* <PaletteGrid x={0} y={0} /> */}

      <Belt x={100} y={200} />
      {/* <Belt x={100} y={250} />
      <Belt x={100} y={300} /> */}
      <VibroTray x={100} y={250} />
    </svg>
  );
}
