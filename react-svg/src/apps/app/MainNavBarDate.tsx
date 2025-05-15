import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function MainNavBarDate() {
  const [value, setValue] = useState<string>(now());
  useEffect(() => {
    setInterval(() => {
      setValue(now());
    }, 1000);
  }, []);
  return (
    <span>
      <span>{value}</span>
    </span>
  );
}

function now(): string {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}
