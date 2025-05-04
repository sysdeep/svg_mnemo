import ModelInterface from "../../../../../core/models/ModelInterface";
import ObjectInfoPanel from "../components/ObjectInfoPanel";
import EmuForm from "./EmuForm";

type Props = {
  obj: ModelInterface;
};

export default function EmuFrame({ obj }: Props) {
  return (
    <div>
      <ObjectInfoPanel obj={obj} />
      <EmuForm obj={obj} />
    </div>
  );
}
