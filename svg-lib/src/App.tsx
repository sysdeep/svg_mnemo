import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mnemo from "./mnemo/Mnemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>SVG js</h1>

      <Mnemo />
    </>
  );
}

export default App;
