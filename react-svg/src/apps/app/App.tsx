import ProjectFrame from "../../core/gui/project_modal/ProjectFrame";
import ProjectModal from "../../core/gui/project_modal/ProjectModal";
import SpbUPLMnemo from "../../projects/spb_upl/SpbUPLMnemo";
import MainNavBar from "./MainNavBar";

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

export default function App() {
  // const pro = useContext(ProjectContext);

  return (
    <>
      <MainNavBar />

      {/* <code>{JSON.stringify(pro)}</code> */}
      {/* <ProjectLoader /> */}
      <SpbUPLMnemo />

      <ProjectModal />
    </>
  );
}
