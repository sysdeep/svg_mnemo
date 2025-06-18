import ModelInterface from "../../../../core/models/ModelInterface";
import { useProjectContext } from "../../../project/project_context";
import TreeNode from "./TreeNode";

type Props = {
  on_selected: (obj: ModelInterface) => void;
};

export default function ProjectTree({ on_selected }: Props) {
  const project = useProjectContext();

  if (!project) {
    return <h3>No project</h3>;
  }

  const root_nodes = project.get_objects().filter((obj) => obj.tree_level === 1);

  return (
    <div>
      <ul className="tree">
        <li>
          <span>{project.name}</span>
          <ul>
            {root_nodes.map((obj) => {
              return (
                <li key={obj.sys_id}>
                  <TreeNode obj={obj} on_select={on_selected} />
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
