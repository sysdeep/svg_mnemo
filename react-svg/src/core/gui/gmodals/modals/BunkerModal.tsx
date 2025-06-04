import ModelInterface from "../../../models/ModelInterface";
import BunkerFrame from "../frames/BunkerFrame";

type Props = {
  model: ModelInterface;
};

export default function BunkerModal({ model }: Props) {
  return (
    <div>
      <h2>Bunker Modal</h2>
      <BunkerFrame model={model} />

      {/* any child frames */}
    </div>
  );
}
