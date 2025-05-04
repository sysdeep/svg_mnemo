import ModelInterface from "../../../../../core/models/ModelInterface";

type Props = {
  obj: ModelInterface;
};

export default function ProtoInfoPanel({ obj }: Props) {
  return (
    <div>
      <h5>Информация о прототипе</h5>
      <table className="table table-sm">
        <tbody>
          <tr>
            <td>Название</td>
            <td>TODO</td>
          </tr>
          <tr>
            <td>Иконка</td>
            <td>TODO</td>
          </tr>
          <tr>
            <td>Описание</td>
            <td>TODO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
