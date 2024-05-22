"use client"; // this is a client component

import axios from "axios";
import MainUI from "./main.presenter";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  const onClickScoreboard = () => {
    router.push("/scoreboard");
  };

  const onClickSchedule = () => {
    // axios.get("http://localhost:3002/schedule/login").then((res) => {
    //   // axios.get("https://yhback.site/schedule/login").then((res) => {
    //   router.push(res.data);
    // });
    router.push("/schedule");
  };

  return (
    <MainUI
      onClickScoreboard={onClickScoreboard}
      onClickSchedule={onClickSchedule}
    ></MainUI>
  );
}
