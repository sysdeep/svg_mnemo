import DSensorErrorView from "../dsensor/DSensorErrorView";
import DSensorView from "../dsensor/DSensorView";
import MainSupplyCompose, { MainSupplyState } from "./MainSupplyCompose";
import { useEffect, useState } from "react";

export type MainSupplyProps = {
  x: number;
  y: number;
  vm: MainSupplyCompose;
};

export default function MainSupplyView({ x, y, vm }: MainSupplyProps) {
  console.log("msc render");

  const sensors_view = vm.sensors.map((m, i) => {
    let p = (12 + 4) * i;
    return <DSensorView x={x + 10} y={y + 10 + p} vm={m} key={i} />;
  });

  return (
    <g>
      <MainSupplyViewInner x={x} y={y} vm={vm} />

      {sensors_view}

      <DSensorErrorView
        x={x + 30}
        y={y + 14}
        size={24}
        vm={vm.emergency_sensor}
      />
    </g>
  );
}

// inner clear view -----------------------------------------------------------
function MainSupplyViewInner({ x, y, vm }: MainSupplyProps) {
  const [state, setState] = useState<MainSupplyState>(vm.value);
  // const { error, block } = useMainSupplyModelAdapter(model);

  useEffect(() => {
    vm.connect(() => {
      setState(vm.value);
    });
  }, []);

  console.log("msv render");

  const color = get_color(state);
  return (
    <g>
      <rect width={50} height={60} x={x} y={y} rx={5} fill={color} />
    </g>
  );
}

function get_color(st: MainSupplyState): string {
  if (st.is_block) return "gray";

  if (st.is_error) return "orange";

  return "brown";
}
