"use client"; // this is a client component

import { useRouter, useSearchParams } from "next/navigation";
import ScheduleUI from "./schedule.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import FormData from "form-data";

export default function Schedule() {
  const searchParams = useSearchParams();
  const [accessToken, setAccessToken] = useState("");
  const [title, setTitle] = useState({
    title: "주간일정표",
    date: "24.5.20 ~ 24.5.26",
  });
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
  const router = useRouter();

  const onChangeInput = (event) => {
    const { id, value } = event.target;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const buttonClick = () => {
    axios.get("http://3.36.75.114:3002/schedule/login").then((res) => {
      // axios.get("http://localhost:3002/schedule/login").then((res) => {
      router.push(res.data);
    });
  };

  const cafeUpload = () => {
    // if (accessToken.length === 0) return;

    const target = document.getElementById("copy");

    if (!target) {
      return alert("결과 저장에 실패했습니다.");
    }
    html2canvas(target).then((canvas) => {
      // 이미 인코딩 된 데이터
      const image = canvas.toDataURL("image/png").split(",")[1];

      // 캔버스 이미지 디코딩
      const toBinaryIMG = Buffer.from(image, "base64").toString("binary");

      // unicode로 변환
      const array = [];
      for (let i = 0; i < toBinaryIMG.length; i += 1) {
        array.push(toBinaryIMG.charCodeAt(i));
      }

      const u8arr = new Uint8Array(array);
      const file = new Blob([u8arr], { type: "image/png" });

      // 전송할 formData 제작
      const formData = new FormData();
      formData.append("img", file);
      //   formData.append("img", "token");

      axios
        .post("http://3.36.75.114:3002/schedule/cafe", formData, {
          // .post("http://localhost:3002/schedule/cafe", formData, {
          headers: {
            Authorization: accessToken,
            "Content-Type": "multipart/form-data",
          },
          transformRequest: [
            function () {
              return formData;
            },
          ],
        })
        .then((res) => {
          console.log(res);
        });

      alert("카페 업로드 완료");
    });
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const isAccessToken = accessToken === "undefined" ? true : false;

    if (isAccessToken) {
      const code = searchParams.get("code");
      const state = searchParams.get("state");

      if (!code || !state) return;

      axios
        .get(
          "http://3.36.75.114:3002/schedule?code=" + code + "&state=" + state
        )
        // .get("http://localhost:3002/schedule?code=" + code + "&state=" + state)
        .then((res) => {
          console.log(res.data.access_token);
          if (res.data.access_token) {
            window.localStorage.setItem("accessToken", res.data.access_token);
            setAccessToken(res.data.access_token);
          }
        });
    } else {
      setAccessToken(accessToken);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScheduleUI
      inputs={inputs}
      buttonClick={buttonClick}
      cafeUpload={cafeUpload}
      onChangeInput={onChangeInput}
    ></ScheduleUI>
  );
}
