"use client"; // this is a client component
import { useRef, useState } from "react";
import ScoreboardUI from "./scoreboard.presenter";
import _ from "lodash";

const teamList = {
  노팅엄: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjY4/MDAxNzE0NDg1NzM4NjU0.5or2CF3IhjacIHUBNLRgZbSu4PJEEZwIJa5sBQyYFU0g.uwmzDrBzFVTl1T2yQUri06TOo2cFZovZIltlQjLCKlUg.PNG/%EB%85%B8%ED%8C%85%EC%97%84.png?type=w1600",
    home: "#cf1e2a",
    away: "#90d5ea",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  뉴캐슬: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjMy/MDAxNzE0NDg1NzM4NjU3.PzDTHuImAkBQ8q-z4kR9_hSf2sFMgGsVhawmFTcwhDQg.YtcBpxXW-mh2kYcnSWpS8QH0v6RSDFcs8bIVEmTh6vog.PNG/%EB%89%B4%EC%BA%90%EC%8A%AC.png?type=w1600",
    home: "#393939",
    away: "#19978f",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  루턴타운: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjQy/MDAxNzE0NDg1NzM4NjM4.56zEHyvRAGI9mY93ieqsrceBCtdxWENjxFz1CXixt5sg.sL9K8qft4__GvSARczboViQ97QuXOtqNxcHoXt8o4Dgg.PNG/%EB%A3%A8%ED%84%B4%ED%83%80%EC%9A%B4.png?type=w1600",
    home: "#ff7900",
    away: "#ffffff",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  리버풀: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMTA2/MDAxNzE0NDc5NjQ0NDIx.rKwD7BpKEFHagC7_0iQHXFuM79eoSwK8KPa4WENBJ4Eg.ORjNiB01mjlCK-kCUSI2drLfXFhTPkTRETdKggVleE4g.PNG/%EB%A6%AC%EB%B2%84%ED%92%80.png?type=w1600",
    home: "#d41e24",
    away: "#16ac6c",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  맨시티: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjE0/MDAxNzE0NDc5NjQ0NDI0.z7pLN0U3eEvXSu4t5u0DhJ2GQNmDadLYKIbzdMm5GxEg.DPvljFkSSP5mClFq-sSwziS3HqJuk3a54U0sCYtadHog.PNG/%EB%A7%A8%EC%8B%9C%ED%8B%B0.png?type=w1600",
    home: "#98c5ea",
    away: "#e7e7e7",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  맨유: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjc2/MDAxNzE0NDc5NjQ0Mzk1.8PswDLfqSaFP2CKXzv3fXEnbWac7E7DSz1INb9HiAbsg.MoBOPZ5MLZf70JQeEXoBt0Odnmq55f7J889layqvqWcg.PNG/%EB%A7%A8%EC%9C%A0.png?type=w1600",
    home: "#da1f0d",
    away: "#344f4e",
    homeFont: "#000000",
    awayFont: "#ffffff",
  },
  번리: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjk5/MDAxNzE0NDg3MDcwNDI3.T8bSQtzTFqm3Ez64cbvqWIfkJPuOk46iONEkIdvCb7og.LLhh5Uf9gaAzRVx4DhHbnGWpSB4xYlJPqFnazo-xzVgg.PNG/%EB%B2%88%EB%A6%AC.png?type=w1600",
    home: "#5f0d41",
    away: "#dee16e",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  본머스: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjQy/MDAxNzE0NDg1NzM4NjM5.diPldpGUnPzAH7tbPv1thBuUO5-Ypxrr59lHADj2qrgg.y13IXJXE6sNdX5A6nWyVdIKhI7ZYRcZUadGbyfqvO9gg.PNG/%EB%B3%B8%EB%A8%B8%EC%8A%A4.png?type=w1600",
    home: "#ff2600",
    away: "#b7dbee",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  브라이튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjA1/MDAxNzE0NDg1NzM4NjM0.3J_CAUcBM3GXVFCg5KFh0VMUC7IGjaUfw3XExZmRvVYg.tb0db8iM_EcAUyWSlo_PfDYYubEptiXZtLAlmzOfsZMg.PNG/%EB%B8%8C%EB%9D%BC%EC%9D%B4%ED%84%B4.png?type=w1600",
    home: "#005daa",
    away: "#02cf5d",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  브렌트포드: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjc0/MDAxNzE0NDg1NzM4NjU3.Jpbhib9IpJF1wk5k4bA3VULHQOQNWY_2NPyS4ft_giAg.zSN2GizM82VFDZ9TmmLS1nVYSJA1qzrjaeDzAzHZs-8g.PNG/%EB%B8%8C%EB%A0%8C%ED%8A%B8%ED%8D%BC%EB%93%9C.png?type=w1600",
    home: "#df323f",
    away: "#9ec2e5",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  셰필드: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMzAw/MDAxNzE0NDg1NzM4NjU2.-QIafT7ZGtu9jF3sylymni_xwSfDtaytQ9rQaSklhMQg.d7Flofc6QwihvfqgQK1uw8318LJds1CgPChETeEJOP4g.PNG/%EC%85%B0%ED%95%84%EB%93%9C.png?type=w1600",
    home: "#b01600",
    away: "#000000",
    homeFont: "#000000",
    awayFont: "#ffffff",
  },
  아스날: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfNzUg/MDAxNzE0NDg1NzM4NjQw.3-qGJK9jYP2Xy6AYiUNqrSf4oJX1t7aND4j1wpOUmTMg.6Rn-h6c98tnrxeJtD3nELmsHYom9aqubc1cKLzZvzlAg.PNG/%EC%95%84%EC%8A%A4%EB%82%A0.png?type=w1600",
    home: "#c71c27",
    away: "#d4fb33",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  아스톤빌라: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMTYy/MDAxNzE0NDg1NzM4NjM4.kuGJ13Jk8eXAhxXVOkH8UM4ixK_oVkJMZDOg4HJrFQEg.mQx0LpeXobDGnVcxMCYTYf4O1DE6DUpIB4c60uDRp2Qg.PNG/%EC%95%A0%EC%8A%A4%ED%84%B4%EB%B9%8C%EB%9D%BC.png?type=w1600",
    home: "#660c34",
    away: "#ffffff",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  에버튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjc4/MDAxNzE0NDg1NzM4NjU3.xO1aLOZ9iMk_1qIOnalhdF7T1GAXQMHCoboEYsmHIxAg.2oBsmpFtiv_-N-Tz_VHsMo0Tr5m-9TuhvYAEftpky7Ig.PNG/%EC%97%90%EB%B2%84%ED%84%B4.png?type=w1600",
    home: "#0a4796",
    away: "#e84a46",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  울버햄튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjM5/MDAxNzE0NDg1NzM4NjQ3.uUSZiEY8pZpEAMY_t5CsiYB7ktpKOEorY8Ij1pRQON0g.gtkuCDaSre4uQa-BSCBVS6B5sCZlch2zd30Zb_zkDmwg.PNG/%EC%9A%B8%EB%B2%84%ED%96%84%ED%8A%BC.png?type=w1600",
    home: "#fcb917",
    away: "#1993ab",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  웨스트햄: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMTk0/MDAxNzE0NDg1NzM4NjQ1.vChag4RH9kVMfddqvl06JEC-sgOsLjQMN9_NmHKZ1dQg.DMqe1yuFNKfRXK6YKTT0lUqGaUqdS4iJ5cpBwGdZWLsg.PNG/%EC%9B%A8%EC%8A%A4%ED%8A%B8%ED%96%84.png?type=w1600",
    home: "#7d2c3b",
    away: "#ffffff",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  첼시: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMTU2/MDAxNzE0NDg1NzM4NjQ1.8J1SA5hgjkI0bjJ_Vbz4HHIct0PibRU8GsR7aj_9N08g.KL9jcBD9sa87hwIP6OoziXy3lnG5exISCyYnH2KA4-sg.PNG/%EC%B2%BC%EC%8B%9C.png?type=w1600",
    home: "#034694",
    away: "#1f2d41",
    homeFont: "#ffffff",
    awayFont: "#ffffff",
  },
  "C.팰리스": {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfODAg/MDAxNzE0NDg1NzM4NjU2.hHXa7imJ_GIOEfvjDEXCsUlgbXcdyG4pP_qWrvraRbAg.qcrXXO8rpvALniD9tdm-sd_x1O6O3eCYtxLQj2M1ytwg.PNG/%ED%81%AC%ED%8C%B0.png?type=w1600",
    home: "#1a458f",
    away: "#ffffff",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  토트넘: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfOTgg/MDAxNzE0NDg1NzM4NjQ2._OIqKEO6i_mN7qHcBnCtE6v51uRhlyv4EFadV6zOm0Eg.u7g5wX8G1mmSp2YwSUVWlBboC0w7DoNFNb7_wgpeVaYg.PNG/%ED%86%A0%ED%8A%B8%EB%84%98.png?type=w1600",
    home: "#ffffff",
    away: "#242b40",
    homeFont: "#000000",
    awayFont: "#ffffff",
  },
  풀럼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA0MzBfMjAz/MDAxNzE0NDg1NzM4NjQ4.5EAVNPpDmjXMWEjzco5Til_Q76_LhKCEr26UBiJm0Jsg.ozjjqBOoUWbOjTFCXBLznp8GRHnHZInxrRJL6iWLQaIg.PNG/%ED%92%80%EB%9F%BC.png?type=w1600",
    home: "#ffffff",
    away: "#ed2f7b",
    homeFont: "#000000",
    awayFont: "#000000",
  },
};

export default function Scoreboard() {
  const [title, setTitle] = useState("23-24 EPL 26R");
  const [teamInput, setTeamInput] = useState("");

  const [team1, setTeam1] = useState("첼시");
  const [team2, setTeam2] = useState("토트넘");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [isTeam1List, setIsTeam1List] = useState(false);
  const [isTeam2List, setIsTeam2List] = useState(false);

  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [inputTime, setInputTime] = useState({
    min: 0,
    sec: 0,
  });

  const time = useRef(0);
  const timerId = useRef("");
  const [isTime, setIsTime] = useState(true);
  const [timeNow, setTimeNow] = useState("전반");

  const [team1Color, setTeam1Color] = useState("#034694");
  const [team2Color, setTeam2Color] = useState("#242b40");
  const [chromakeyColor, setChromakeyColor] = useState("#00ff00");

  const [team1Font, setTeam1Font] = useState("#ffffff");
  const [team2Font, setTeam2Font] = useState("#ffffff");

  const [timerButtonActive, setTimerButtonActive] = useState(true);

  const [team1CustomBackColor, setTeam1CustomBackColor] = useState("#ffffff");
  const [team2CustomBackColor, setTeam2CustomBackColor] = useState("#000000");
  const [team1CustomBackColorActive, setTeam1CustomBackColorActive] =
    useState(false);
  const [team2CustomBackColorActive, setTeam2CustomBackColorActive] =
    useState(false);

  const onClickTimerStart = () => {
    if (!timerButtonActive) return;
    setTimerButtonActive(false);
    timerId.current = setInterval(() => {
      time.current++;
      setMin(Math.floor(time.current / 60));
      setSecond(time.current % 60);
    }, 1000);
  };

  const onClickTimerPauseResume = () => {
    setTimerButtonActive(true);
    clearInterval(timerId.current);
  };

  const onClickTeam1ListActive = () => {
    setIsTeam1List((env) => !env);
  };
  const onClickTeam2ListActive = () => {
    setIsTeam2List((env) => !env);
  };

  const onChangeTeam1 = (event) => {
    getDebounceTem1(event.target.value);
  };
  const getDebounceTem1 = _.debounce((input) => {
    setTeamInput(input);
  }, 200);

  const onChangeTeam2 = (event) => {
    getDebounceTeam2(event.target.value);
  };
  const getDebounceTeam2 = _.debounce((input) => {
    setTeamInput(input);
  }, 200);

  const onClickTeam1Button = () => {
    setTeam1(teamInput);
    setTeam1CustomBackColorActive(true);

    const backColor =
      Object.keys(teamList).indexOf(teamInput) > -1
        ? teamList[teamInput]["home"]
        : "#ffffff";

    setTeam1Color(backColor);

    const fontColor =
      Object.keys(teamList).indexOf(teamInput) > -1
        ? teamList[teamInput]["homeFont"]
        : "#000000";

    setTeam1Font(fontColor);
  };
  const onClickTeam2Button = () => {
    setTeam2(teamInput);
    setTeam2CustomBackColorActive(true);

    // const color =
    //   Object.keys(teamList).indexOf(teamInput) > -1
    //     ? teamList[teamInput]["away"]
    //     : "#000000";

    // setTeam2Color(color);

    const backColor =
      Object.keys(teamList).indexOf(teamInput) > -1
        ? teamList[teamInput]["away"]
        : "#000000";

    setTeam2Color(backColor);

    const fontColor =
      Object.keys(teamList).indexOf(teamInput) > -1
        ? teamList[teamInput]["awayFont"]
        : "#ffffff";

    setTeam2Font(fontColor);
  };

  const onClickTeam1Score = (number) => {
    if (team1Score === 0 && number === -1) return;
    setTeam1Score((env) => env + number);
  };
  const onClickTeam2Score = (number) => {
    if (team2Score === 0 && number === -1) return;
    setTeam2Score((env) => env + number);
  };

  const onClickTimeButton = (event) => {
    const txt = event.target.innerText;
    let buttonSecond = 0;

    if (txt === "전반") {
      buttonSecond = 0;
      setIsTime(true);
    } else if (txt === "후반") {
      buttonSecond = 2700;
      setIsTime(true);
    } else if (txt === "연장전반") {
      buttonSecond = 5400;
      setIsTime(true);
    } else if (txt === "연장후반") {
      buttonSecond = 6300;
      setIsTime(true);
    } else if (txt === "하프타임") {
      buttonSecond = 0;
      setIsTime(false);
    } else {
      buttonSecond = 0;
      setIsTime(false);
    }

    setMin(Math.floor(buttonSecond / 60));
    setSecond(buttonSecond % 60);
    time.current = buttonSecond;
    setTimeNow(txt);
  };

  const onChangeTimeSetting = (event) => {
    const { id, value } = event.target;

    setInputTime({
      ...inputTime,
      [id]: value,
    });
  };

  const onClickTimeSetting = () => {
    setMin(inputTime.min);
    setSecond(inputTime.sec);
    setTimeNow("사용자설정");
    setIsTime(true);
    time.current = Number(inputTime.min) * 60 + Number(inputTime.sec);
  };

  const onClickFont1Color = () => {
    if (team1Font === "#ffffff") setTeam1Font("#000000");
    else setTeam1Font("#ffffff");
  };
  const onClickFont2Color = () => {
    if (team2Font === "#ffffff") setTeam2Font("#000000");
    else setTeam2Font("#ffffff");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onClickTeam1CustomColorChangeButton = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "흰배경으로") setTeam1Color("#ffffff");
    else setTeam1Color("#000000");
  };
  const onClickTeam2CustomColorChangeButton = (event) => {
    console.log(event.target.innerText);
    // if (event.target.innerText === "흰배경으로")
    //   setTeam2CustomBackColor("#ffffff");
    // else setTeam2CustomBackColor("#000000");
    if (event.target.innerText === "흰배경으로") setTeam2Color("#ffffff");
    else setTeam2Color("#000000");
  };

  return (
    <ScoreboardUI
      isTime={isTime}
      timeNow={timeNow}
      title={title}
      teamList={teamList}
      team1={team1}
      team2={team2}
      setTeam1={setTeam1}
      setTeam2={setTeam2}
      team1Score={team1Score}
      team2Score={team2Score}
      team1Color={team1Color}
      team2Color={team2Color}
      isTeam1List={isTeam1List}
      isTeam2List={isTeam2List}
      onClickTeam1ListActive={onClickTeam1ListActive}
      onClickTeam2ListActive={onClickTeam2ListActive}
      min={min}
      second={second}
      onClickTimerStart={onClickTimerStart}
      onClickTimerPauseResume={onClickTimerPauseResume}
      onClickTeam1Score={onClickTeam1Score}
      onClickTeam2Score={onClickTeam2Score}
      onChangeTeam1={onChangeTeam1}
      onChangeTeam2={onChangeTeam2}
      onClickTeam1Button={onClickTeam1Button}
      onClickTeam2Button={onClickTeam2Button}
      onClickTimeButton={onClickTimeButton}
      onChangeTimeSetting={onChangeTimeSetting}
      onClickTimeSetting={onClickTimeSetting}
      chromakeyColor={chromakeyColor}
      setChromakeyColor={setChromakeyColor}
      team1Font={team1Font}
      team2Font={team2Font}
      onClickFont1Color={onClickFont1Color}
      onClickFont2Color={onClickFont2Color}
      onChangeTitle={onChangeTitle}
      setTeam1Color={setTeam1Color}
      setTeam2Color={setTeam2Color}
      setTeam1Font={setTeam1Font}
      setTeam2Font={setTeam2Font}
      team1CustomBackColor={team1CustomBackColor}
      team2CustomBackColor={team2CustomBackColor}
      team1CustomBackColorActive={team1CustomBackColorActive}
      team2CustomBackColorActive={team2CustomBackColorActive}
      setTeam1CustomBackColorActive={setTeam1CustomBackColorActive}
      setTeam2CustomBackColorActive={setTeam2CustomBackColorActive}
      onClickTeam1CustomColorChangeButton={onClickTeam1CustomColorChangeButton}
      onClickTeam2CustomColorChangeButton={onClickTeam2CustomColorChangeButton}
      setTeam1CustomBackColor={setTeam1CustomBackColor}
      setTeam2CustomBackColor={setTeam2CustomBackColor}
    ></ScoreboardUI>
  );
}
