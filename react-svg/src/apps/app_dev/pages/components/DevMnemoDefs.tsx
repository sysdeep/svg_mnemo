import BunkerGradients from "../../../../core/views/bunker/BunkerGradients";
import MainColorizeFilters from "../../../../core/views/common/MainColorizeFilters";
import MainGradient from "../../../../core/views/common/MainGradient";
import LampGradients from "../../../../core/views/lamp/LampGradients";

export default function DevMnemoDefs() {
  return (
    <g>
      <defs>
        <MainGradient />
        <BunkerGradients />
        <LampGradients />

        <MainColorizeFilters />
      </defs>
    </g>
  );
}
