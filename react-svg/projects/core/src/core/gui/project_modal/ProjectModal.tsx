import WinBox from "react-winbox";
import ProjectFrame from "./ProjectFrame";
import useProjectModal from "./useProjectModal";
import { useProjectContext } from "../../project/project_context";

export default function ProjectModal() {
  const project = useProjectContext();
  const { is_open, close_modal } = useProjectModal();

  return (
    <div>
      {is_open && (
        <WinBox
          width={1200}
          height={800}
          x="center"
          y="center"
          onClose={() => close_modal()}
          title={`Project - ${project?.name}`}>
          <ProjectFrame />
        </WinBox>
      )}
    </div>
  );
}
