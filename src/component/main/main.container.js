"use client"; // this is a client component

import MainUI from "./main.presenter";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  const onClickScoreboard = () => {
    router.push("/scoreboard");
  };

  const onClickSchedule = () => {
    // router.push("/schedule");
  };

  return (
    <MainUI
      onClickScoreboard={onClickScoreboard}
      onClickSchedule={onClickSchedule}
    ></MainUI>
  );
}
