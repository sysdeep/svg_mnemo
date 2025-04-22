import { useEffect, useState } from "react";
import "./App.css";
import Mnemo from "./components/Mnemo";
import AppCompose from "./units/app/AppCompose";

const state = new AppCompose();

/*
// Example
console.log(Math.random() < 0.1); //10% probability of getting true
console.log(Math.random() < 0.4); //40% probability of getting true
console.log(Math.random() < 0.5); //50% probability of getting true
console.log(Math.random() < 0.8); //80% probability of getting true
console.log(Math.random() < 0.9); //90% probability of getting true
*/

/*
Выводы
- можно подключаться к шине, причём в конечных элементах
- чтобы избежать каскадного рендеринга, в контроллерах нельзя менять стейт, там только композиция
- dev-tools нагло врёт что дочерний компонент отрендерился))
*/

function App() {
  useEffect(() => {
    let int = setInterval(() => {
      for (let s of state.main_supply.sensors) {
        var random_boolean = Math.random() < 0.5;
        s.set_state({ ...s.value, is_state: random_boolean });
      }

      let est = state.main_supply.emergency_sensor.value;
      state.main_supply.emergency_sensor.set_state({
        ...est,
        is_state: !est.is_state,
      });

      for (let s of state.motor.sensors) {
        var random_boolean = Math.random() < 0.5;
        s.set_state({ ...s.value, is_state: random_boolean });
      }
    }, 1000);

    return () => clearInterval(int);
  }, []);

  const set_block = (st: boolean) =>
    state.main_supply.set_state({ ...state.main_supply.value, is_block: st });

  const set_error = (st: boolean) =>
    state.main_supply.set_state({ ...state.main_supply.value, is_error: st });

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>

      <div>
        <div>
          <button onClick={() => set_error(true)}>ms error</button>
          <button onClick={() => set_error(false)}>ms unerror</button>
        </div>
        <div>
          <button onClick={() => set_block(true)}>ms block</button>
          <button onClick={() => set_block(false)}>ms unblock</button>
        </div>
      </div>

      <Mnemo app_model={state} />
    </>
  );
}

export default App;
