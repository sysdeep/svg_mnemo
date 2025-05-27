import ModelInterface from "../../../models/ModelInterface";
import DSensor from "../frames/DSensorFrame";

type Props = {
  model: ModelInterface;
};

export default function DSensorModal({ model }: Props) {
  return (
    <div>
      <h2>DSensor Modal</h2>
      <DSensor model={model} />

      {/* any child frames */}
    </div>
  );
}
