import ModelInterface from "../../../models/ModelInterface";

type Props = {
  obj: ModelInterface;
};

export default function ObjectInfoPanel({ obj }: Props) {
  return (
    <div>
      <h5>Информация об объекте</h5>
      <table className="table table-sm">
        <tbody>
          <tr>
            <td>name</td>
            <td>{obj.name}</td>

            <td>obj_id</td>
            <td>TODO</td>
          </tr>

          <tr>
            <td>sname</td>
            <td>{obj.sname}</td>

            <td>plc_id</td>
            <td>TODO</td>
          </tr>
          <tr>
            <td>proto</td>
            <td>{obj.proto_name}</td>

            <td>sys_id</td>
            <td>{obj.sys_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
