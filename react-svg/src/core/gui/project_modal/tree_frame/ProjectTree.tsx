import { useContext } from "react";
import ModelInterface from "../../../../core/models/ModelInterface";
import { ProjectContext } from "../../../../ProjectContext";
import TreeNode from "./TreeNode";

type Props = {
  on_selected: (obj: ModelInterface) => void;
};

export default function ProjectTree({ on_selected }: Props) {
  const project = useContext(ProjectContext);

  if (!project) {
    return <h3>No project</h3>;
  }

  const root_nodes = project
    .get_objects()
    .filter((obj) => obj.tree_level === 1);

  return (
    <div>
      <ul className="tree">
        {root_nodes.map((obj, i) => {
          return (
            <li key={i}>
              <TreeNode obj={obj} on_select={on_selected} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
