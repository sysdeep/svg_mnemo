import ModelInterface from "../../../models/ModelInterface";
import AttrsInfoPanel from "./AttrsInfoPanel";
import ObjectInfoPanel from "../components/ObjectInfoPanel";
import ProtoInfoPanel from "./ProtoInfoPanel";

type Props = {
  obj: ModelInterface;
};

export default function InfoFrame({ obj }: Props) {
  return (
    <div>
      <ObjectInfoPanel obj={obj} />
      <ProtoInfoPanel obj={obj} />
      <AttrsInfoPanel obj={obj} />
    </div>
  );
}
