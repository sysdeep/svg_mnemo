import ModelInterface from "../../../../core/models/ModelInterface";

type Props = {
  obj: ModelInterface;
  on_select: (obj: ModelInterface) => void;
};

export default function TreeNode({ obj, on_select }: Props) {
  const childrens = obj.get_childrens();

  const on_click = (e: any) => {
    e.preventDefault();
    on_select(obj);
  };

  return (
    <>
      {/* <i className="indicator glyphicon glyphicon-minus-sign"></i> */}
      <a href="#" onClick={on_click}>
        {obj.name}
      </a>

      <ul>
        {childrens.map((cobj, i) => {
          return (
            <li key={i}>
              <TreeNode obj={cobj} on_select={on_select} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
