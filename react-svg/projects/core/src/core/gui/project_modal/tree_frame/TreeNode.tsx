import { useState } from "react";
import ModelInterface from "../../../../core/models/ModelInterface";

type Props = {
  obj: ModelInterface;
  on_select: (obj: ModelInterface) => void;
};

export default function TreeNode({ obj, on_select }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const childrens = obj.get_childrens();

  const on_click = (e: any) => {
    e.preventDefault();
    on_select(obj);
  };

  const on_folder = (e: any) => {
    e.preventDefault();
    setExpanded((st) => !st);
  };

  return (
    <>
      {childrens.length > 0 && (
        <a href="#" onClick={on_folder}>
          {expanded ? <IconMinus /> : <IconPlus />}
        </a>
      )}
      &nbsp;
      <a href="#" onClick={on_click}>
        {/* <i className="indicator glyphicon glyphicon-minus-sign"></i> */}

        {obj.name}
      </a>
      {expanded && <NodeChildrens childrens={childrens} on_select={on_select} />}
    </>
  );
}

type ChildrensProps = {
  childrens: ModelInterface[];
  on_select: (obj: ModelInterface) => void;
};
function NodeChildrens({ childrens, on_select }: ChildrensProps) {
  return (
    <ul>
      {childrens.map((cobj) => {
        return (
          <li key={cobj.sys_id}>
            <TreeNode obj={cobj} on_select={on_select} />
          </li>
        );
      })}
    </ul>
  );
}

function IconPlus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      // class="bi bi-plus-square"
      viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
    </svg>
  );
}

function IconMinus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      // class="bi bi-dash-square"
      viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
    </svg>
  );
}
