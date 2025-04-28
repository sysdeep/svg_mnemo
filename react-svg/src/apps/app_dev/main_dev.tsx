import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppDev from "./AppDev";
// import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppDev />
  </StrictMode>
);
