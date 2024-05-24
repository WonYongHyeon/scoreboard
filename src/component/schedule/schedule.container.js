"use client"; // this is a client component

import { useRouter, useSearchParams } from "next/navigation";
import ScheduleUI from "./schedule.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import FormData from "form-data";
import { toPng } from "html-to-image";
import Swal from "sweetalert2";

export default function Schedule() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accessToken, setAccessToken] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [memoActive, setMemoActive] = useState(false);
  const [memoStart, setMemoStart] = useState(false);
  const [mode, setMode] = useState("insert");
  const [content, setContent] = useState("");
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

  const changeDate = (date) => {
    setStartDate(date);
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);
    setMemoActive(!(event.target.value.length === 0));
    setMemoStart(true);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  /** 입력모드 or 수정모드 변경 */
  const onClickMode = (mode) => {
    if (mode === "update") {
      const inputs = JSON.parse(window.localStorage.getItem("inputs"));
      const startDate = window.localStorage.getItem("startDate");
      const memo = window.localStorage.getItem("memo");
      const content = window.localStorage.getItem("content");

      if (!inputs) {
        Swal.fire({
          icon: "warning",
          title: "이전에 등록한 데이터가 없습니다.",
        });
      } else {
        setInputs(inputs);
        setStartDate(new Date(startDate));
        setMemo(memo);
        setMemoStart(memo.length !== 0);
        setMemoActive(memo.length !== 0);
        setContent(content);
      }
    }
    setMode(mode);
  };

  const onClickQuestion = () => {
    Swal.fire({
      title: "도움말",
      html: `
      <div style="width: 100%; display: flex; justify-content: start; flex-direction: column;">
      <p style="display: flex; margin-top: 20px; margin-bottom: 10px; font-size: 25px;">사용 방법</p>
      <p style="display: flex;">1. 일정 입력 / 일정 수정</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">상단의 탭을 선택하여 일정입력 / 일정수정 변경이 가능합니다.</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">일정입력 : 새로운 주간 일정표를 작성합니다.</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">일정수정 : 마지막으로 업로드한 주간 일정표 정보를 불러옵니다.</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 70px;">업로드 시, 제목에 [일정수정]이 붙습니다.</p>

      <p style="display: flex;">2. 월요일에서 일요일까지 오전 / 오후 일정 입력</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">하단의 주간 일정표에 입력한 값이 자동으로 반영됩니다.</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">미입력시 미정 이미지, 휴뱅/휴방 입력시 휴방 이미지가 출력됩니다.</p>

      <p style="display: flex;">3. 시작일 선택</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">주간 일정표의 시작일(월요일)을 입력합니다.</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">종료일(일요일)이 자동으로 계산되어 주간 일정표에 입력됩니다.</p>

      <p style="display: flex;">4. 메모 입력</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">일정표에 짧은 메모가 가능합니다.(권장 5~6줄까지)</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">입력한 값은 주간 입력표의 오른쪽 상단에 메모지와 함께 입력됩니다.</p>


      <p style="display: flex;">5. 본문 입력</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">주간 일정표와 별개로 남기고 싶은 글이 있다면 입력해주세요.</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px; text-align: start">입력된 값은 카페 게시글의 주간 일정표 이미지 아래에 가운데 정렬하여 입력됩니다.</p>

      <p style="display: flex;">6. 업로드</p>
      <p style="display: flex; font-size: 15px; color: #999; margin-left: 5px;">입력한 값들을 이미지화 시켜 카페에 업로드합니다.</p>
      
      <p style="display: flex; margin-top: 20px; margin-bottom: 10px; font-size: 25px;">주의 사항</p>
      <p style="display: flex; color: #999; margin-left: 5px;">새로고침하면 로그인이 풀립니다. (고치는 중)</p>
      <p style="display: flex; color: #999; margin-left: 5px;">아래의 홈 바로가기를 통해 다시 접속해주세요.</p>

      </div>
      `,
      showCancelButton: true,
      confirmButtonText: "홈 바로가기",
      cancelButtonText: "확인",
    }).then((result) => {
      if (result.isConfirmed) router.push("/");
    });
  };

  /** 카페 게시글 작성 함수 */
  const cafeUpload = () => {
    const title =
      mode === "insert"
        ? "주간일정표를 업로드합니다"
        : "주간일정표 수정본을 업로드합니다";
    const text =
      mode === "insert"
        ? "게시글 제목 : 주간일정표 " + date
        : "게시글 제목: [일정수정] 주간일정표 " + date;

    Swal.fire({
      icon: "info",
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: "업로드",
      cancelButtonText: "취소",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
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

          const subject =
            mode === "insert"
              ? "주간일정표 " + date
              : "[일정수정] 주간일정표 " + date;

          const contentStart = `<div style='font-size: 20px; text-align: center; width: 100%;'><br>`;
          const contentEnd = `</div>`;

          // 전송할 formData 제작
          const formData = new FormData();
          formData.append("img", file);
          formData.append("subject", subject);
          formData.append(
            "content",
            content.length !== 0
              ? contentStart + content.replaceAll(/\n/g, "<br>") + contentEnd
              : " "
          );
          formData.append("accessToken", accessToken);

          axios
            // .post("http://localhost:3002/schedule/cafe", formData, {
            .post("https://yhback.site/schedule/cafe", formData, {
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
              console.log(res.status);
              if (res.status === 200) {
                Swal.fire({
                  icon: "success",
                  title: "업로드에 성공했습니다.",
                });
                window.localStorage.setItem("inputs", JSON.stringify(inputs));
                window.localStorage.setItem("startDate", startDate);
                window.localStorage.setItem("memo", memo);
                window.localStorage.setItem("content", content);
              } else {
                Swal.fire({
                  icon: "error",
                  title: "업로드에 실패했습니다.",
                });
              }
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                icon: "error",
                title: "업로드에 실패했습니다.",
              });
            });
        });
        // result.isConfirmed = false
      } else {
      }
    });
  };

  /** 네이버 로그인 함수 */
  const cafeLogin = async () => {
    // await axios.get("http://localhost:3002/schedule/login").then((res) => {
    axios.get("https://yhback.site/schedule/login").then((res) => {
      router.push(res.data);
    });
  };

  /** 새로고침시 세션 스토리지의 액세스 토큰 삭제 및 재로그인 진행 */
  const preventClose = async () => {
    await cafeLogin();
    window.sessionStorage.removeItem("accessToken");
  };

  // 로그인 후 스트링쿼리의 code와 state 값으로 액세스토큰 얻어오기
  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const token = window.sessionStorage.getItem("accessToken");

    if (!code || !state) {
      cafeLogin();
    }

    if (!token) {
      axios
        // .get("http://localhost:3002/schedule?code=" + code + "&state=" + state)
        .get("https://yhback.site/schedule?code=" + code + "&state=" + state)
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

  // 새로고침 재로그인
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  });

  // 날짜 변경 시 시작일과 종료일 계산
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
      memo={memo}
      onChangeMemo={onChangeMemo}
      startDate={startDate}
      setStartDate={setStartDate}
      changeDate={changeDate}
      date={date}
      memoActive={memoActive}
      memoStart={memoStart}
      mode={mode}
      onClickMode={onClickMode}
      content={content}
      onChangeContent={onChangeContent}
      onClickQuestion={onClickQuestion}
    ></ScheduleUI>
  );
}
