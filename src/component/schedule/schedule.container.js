"use client"; // this is a client component

import { useRouter, useSearchParams } from "next/navigation";
import ScheduleUI from "./schedule.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import FormData from "form-data";
import { toPng } from "html-to-image";

export default function Schedule() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accessToken, setAccessToken] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [memo, setMemo] = useState("");
  const [memoActive, setMemoActive] = useState(false);
  const [memoStart, setMemoStart] = useState(false);
  const [inputs, setInputs] = useState({
    monMorning: "",
    monEvening: "",
    tueMorning: "",
    tueEvening: "",
    wedMorning: "",
    wedEvening: "",
    thuMorning: "",
    thuEvening: "",
    friMorning: "",
    friEvening: "",
    satMorning: "",
    satEvening: "",
    sunMorning: "",
    sunEvening: "",
  });

  const onChangeInput = (event) => {
    const { id, value } = event.target;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const changeDate = (date) => {
    setStartDate(date);
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);

    setMemoActive(!(event.target.value.length === 0));
    setMemoStart(true);
  };

  const cafeUpload = () => {
    const target = document.getElementById("copy");

    if (!target) {
      return alert("결과 저장에 실패했습니다.");
    }

    toPng(document.getElementById("copy")).then(function (dataUrl) {
      // 이미 인코딩 된 데이터
      const image = dataUrl.split(",")[1];

      // 캔버스 이미지 디코딩
      const toBinaryIMG = Buffer.from(image, "base64").toString("binary");

      // unicode로 변환
      const array = [];
      for (let i = 0; i < toBinaryIMG.length; i += 1) {
        array.push(toBinaryIMG.charCodeAt(i));
      }

      const u8arr = new Uint8Array(array);
      const file = new Blob([u8arr], { type: "image/png" });

      const subject = "주간일정표 " + date;

      // 전송할 formData 제작
      const formData = new FormData();
      formData.append("img", file);
      formData.append("subject", subject);
      formData.append("content", content);
      formData.append("accessToken", accessToken);

      axios
        .post("http://localhost:3002/schedule/cafe", formData, {
          // .post("https://yhback.site/schedule/cafe", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          transformRequest: [
            function () {
              return formData;
            },
          ],
        })
        .then((res) => {
          if (res.status === 200) alert("주간일정표 업로드 완료");
          console.log(res);
        });
    });
  };

  const cafeLogin = () => {
    axios.get("http://localhost:3002/schedule/login").then((res) => {
      // axios.get("https://yhback.site/schedule/login").then((res) => {
      router.push(res.data);
    });
  };

  const preventClose = () => {
    window.sessionStorage.removeItem("accessToken");
    cafeLogin();
  };

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const token = window.sessionStorage.getItem("accessToken");

    if (!code || !state) {
      cafeLogin();
    }

    if (token === "undefined" || !token) {
      axios
        .get("http://localhost:3002/schedule?code=" + code + "&state=" + state)
        // .get("http://yhback.site/schedule?code=" + code + "&state=" + state)
        .then((res) => {
          const token = res.data.access_token;
          if (token) {
            setAccessToken(token);
            window.sessionStorage.setItem("accessToken", token);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  });

  useEffect(() => {
    const startDay =
      startDate.getFullYear() +
      "." +
      (startDate.getMonth() + 1) +
      "." +
      startDate.getDate();

    const days = startDay.split(".");

    const endDate = new Date(days[0], Number(days[1]) - 1, days[2]);
    endDate.setDate(endDate.getDate() + 6);

    const endDay =
      endDate.getFullYear() +
      "." +
      (endDate.getMonth() + 1) +
      "." +
      endDate.getDate();

    setDate(startDay.substr(2) + " ~ " + endDay.substr(2));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  return (
    <ScheduleUI
      inputs={inputs}
      cafeUpload={cafeUpload}
      onChangeInput={onChangeInput}
      content={content}
      onChangeContent={onChangeContent}
      memo={memo}
      onChangeMemo={onChangeMemo}
      startDate={startDate}
      setStartDate={setStartDate}
      changeDate={changeDate}
      date={date}
      memoActive={memoActive}
      memoStart={memoStart}
    ></ScheduleUI>
  );
}
