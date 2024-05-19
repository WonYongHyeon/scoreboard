import Schedule from "@/component/schedule/schedule.container";
import { Suspense } from "react";

export default function SchedulePage() {
  return (
    <Suspense>
      <Schedule></Schedule>
    </Suspense>
  );
}
