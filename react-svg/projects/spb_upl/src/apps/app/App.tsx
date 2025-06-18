import ProjectModal from "../../core/gui/project_modal/ProjectModal";
import MainNavBar from "./MainNavBar";
import Mnemo from "./Mnemo";

/*
// Example
console.log(Math.random() < 0.1); //10% probability of getting true
console.log(Math.random() < 0.4); //40% probability of getting true
console.log(Math.random() < 0.5); //50% probability of getting true
console.log(Math.random() < 0.8); //80% probability of getting true
console.log(Math.random() < 0.9); //90% probability of getting true
*/

export default function App() {
  return (
    <>
      <MainNavBar />

      <Mnemo />

      <ProjectModal />
    </>
  );
}
