import { useContext, useState } from "react";
import WinBox from "react-winbox";
import ProjectFrame from "./ProjectFrame";
import { ProjectContext } from "../../../ProjectContext";

export default function ProjectModal() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const project = useContext(ProjectContext);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open project tree</button>
      {isOpen && (
        <WinBox
          width={1200}
          height={800}
          x="center"
          y="center"
          // noClose={this.state.inEditing}
          onClose={() => setIsOpen(false)}
          title={`Project - ${project?.name}`}
        >
          <ProjectFrame />
        </WinBox>
      )}
    </div>
  );
}
