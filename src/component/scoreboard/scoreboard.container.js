"use client"; // this is a client component
import { useEffect, useRef, useState } from "react";
import ScoreboardUI from "./scoreboard.presenter";
import _ from "lodash";

const teamList = {
  노팅엄: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTE1/MDAxNzE0NjU5ODI5NDI3.-IcqnldClzNpTgB6jYwLUpK77qImR8dM_hKhRjfvxmUg.wRVSXT56ubRKV3PWaO-6bJL9n8RxZZo6bZ6Z7tERoJQg.PNG/%EB%85%B8%ED%8C%85%EC%97%84.png?type=w1600",
    home: "#cf1e2a",
    homeFont: "#ffffff",
    away: "#90d5ea",
    awayFont: "#000000",
    third: "#334671",
    thirdFont: "#ffffff",
  },
  뉴캐슬: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfODUg/MDAxNzE0NjU5ODI5NDM2.PuS_w4uqO6tBkXnQFIf9xPHgv-pOaxS51I1op0r6ekYg.QpAGsZ4MdN_qI_wJbJIBgA76cso18EoJBAjND2_2wJAg.PNG/%EB%89%B4%EC%BA%90%EC%8A%AC.png?type=w1600",
    home: "#393939",
    homeFont: "#ffffff",
    away: "#19978f",
    awayFont: "#000000",
    third: "#033e70",
    thirdFont: "#ffffff",
  },
  루턴타운: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMiAg/MDAxNzE0NjU5ODI5NDM1.qm4Rb9FKjdQ74ArRYnLYhFY7qer6V9V0PcjXH4a7tiMg.Ibku1uOqGs4rHUYX7b7Qq7v849L8-yfFksLVHTywVpwg.PNG/%EB%A3%A8%ED%84%B4%ED%83%80%EC%9A%B4.png?type=w1600",
    home: "#ff7900",
    homeFont: "#000000",
    away: "#dcdcdc",
    awayFont: "#000000",
    third: "#313555",
    thirdFont: "#ffffff",
  },
  리버풀: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMiAg/MDAxNzE0NjU5ODI5NDM1.FuSG67yVuqIaWBtTX5_PTmgTirbRDPY8ClEOZ701TBIg.W5plEypS2rZPKGpRQLx9Zhe90znTEalcSDFudZ9lA_Ig.PNG/%EB%A6%AC%EB%B2%84%ED%92%80.png?type=w1600",
    home: "#d41e24",
    homeFont: "#ffffff",
    away: "#16ac6c",
    awayFont: "#000000",
    third: "#a092cd",
    thirdFont: "#ffffff",
  },
  맨시티: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTQg/MDAxNzE0NjU5ODI5NDM2.lKKSvhhU92I9QdlnITXIm7t61CxGMCCbCvBEfJQd1G0g.-XUyox8aIhfMj_yB5KgSlet_EFC2DhEHGn6vrmAZNwIg.PNG/%EB%A7%A8%EC%8B%9C%ED%8B%B0.png?type=w1600",
    home: "#a6cce5",
    homeFont: "#000000",
    away: "#dcdcdc",
    awayFont: "#000000",
    third: "#1e282c",
    thirdFont: "#ffffff",
  },
  맨유: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjU3/MDAxNzE0NjU5ODI5NDM1.3-tUtxN4Iv9uufnbIG60HOAO45x7z_8W9jy-Oj42Iucg.4dfDvrB1YFyRJyBmcy79hDuKuKsLt1KR8loEkIYZfuwg.PNG/%EB%A7%A8%EC%9C%A0.png?type=w1600",
    home: "#da1f0d",
    homeFont: "#ffffff",
    away: "#344f4e",
    awayFont: "#ffffff",
    third: "#dcdcdc",
    thirdFont: "#000000",
  },
  번리: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfNDUg/MDAxNzE0NjYxMjYwODE2.Yh7ZbaR3E_2Q4BR5aEFcIyCjGlf_p9-SG-fVF9cF8pEg.BLhKaQ09yjl76irkUZunhS7K4KxJ9HlYcCPwHKZ49_Ug.PNG/%EB%B2%88%EB%A6%AC1.png?type=w1600",
    home: "#5f0d41",
    homeFont: "#ffffff",
    away: "#dee16e",
    awayFont: "#000000",
    third: "#3d4b66",
    thirdFont: "#ffffff",
  },
  본머스: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjI0/MDAxNzE0NjU5ODI5NDMy.KovhqfQLFkB0FhCHBfjYxJditVb3TGeAjlkkKkxwflYg.acWa__2W-zeLNRygcd-u0_69kVO1cYLm3Du8y9mZXi8g.PNG/%EB%B3%B8%EB%A8%B8%EC%8A%A4.png?type=w1600",
    home: "#ff2600",
    homeFont: "#000000",
    away: "#b7dbee",
    awayFont: "#000000",
    third: "#f2dc5c",
    thirdFont: "#000000",
  },
  브라이튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjkz/MDAxNzE0NjU5ODI5NDM0.mpWx84-qKLeC59dJDriTEIEZEgR1EGvaeEFKws77W8kg.I9_MC5YIqxWtZBr3Aet53qkRcsOM5DLXwY8cVTKcTU0g.PNG/%EB%B8%8C%EB%9D%BC%EC%9D%B4%ED%84%B4.png?type=w1600",
    home: "#005daa",
    homeFont: "#ffffff",
    away: "#02cf5d",
    awayFont: "#000000",
    third: "#fd5430",
    thirdFont: "#000000",
  },
  브렌트포드: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfNyAg/MDAxNzE0NjU5ODI5NDM0.aDh9Q7S9JmixM35xZEjiSP9ULf1vbCCdzULWnynOuqAg.pgYbLx2LSae_sL0rRZfXi3U3izRs8RmYBN_hoOYMMdAg.PNG/%EB%B8%8C%EB%A0%8C%ED%8A%B8%ED%8D%BC%EB%93%9C.png?type=w1600",
    home: "#df323f",
    homeFont: "#ffffff",
    away: "#9ec2e5",
    awayFont: "#000000",
    third: "#aac9d3",
    thirdFont: "#000000",
  },
  셰필드: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfOTgg/MDAxNzE0NjU5ODI5NDM0.B70AoG8ucrpJVWQO16yfkKs4XN0chr1LagSL6VfIXx0g.mjx5OIvbPtpg9H-jIQ4xSfkCjFZS7CmEVxDDQjV3yY8g.PNG/%EC%85%B0%ED%95%84%EB%93%9C.png?type=w1600",
    home: "#b01600",
    homeFont: "#ffffff",
    away: "##c6c332",
    awayFont: "#000000",
    third: "#014a49",
    thirdFont: "#ffffff",
  },
  아스날: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfOTMg/MDAxNzE0NjU5ODI5NDI1.vv_wfzjzyrL6sdWQwmZxdY3l2J_mt5xSuAdtln37fWIg.-Ll-eRgMrVf2pzScMQsJr5YpUr7qJLKqGbij7XWPL0gg.PNG/%EC%95%84%EC%8A%A4%EB%82%A0.png?type=w1600",
    home: "#c71c27",
    homeFont: "#ffffff",
    away: "#d4fb33",
    awayFont: "#000000",
    third: "#0a575d",
    thirdFont: "#ffffff",
  },
  아스톤빌라: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjg3/MDAxNzE0NjU5ODI5NDE2.AvUfs1LwPbAiJQC9yviPqIB7x5c0MLXze1eZ7ChMIFwg.ILu25CxFzFXVsvRYUAE4yX7_vlv5d5-f4xyM_q8Lokcg.PNG/%EC%95%A0%EC%8A%A4%ED%84%B4%EB%B9%8C%EB%9D%BC.png?type=w1600",
    home: "#660c34",
    homeFont: "#ffffff",
    away: "#dcdcdc",
    awayFont: "#000000",
    third: "#587d95",
    thirdFont: "#ffffff",
  },
  에버튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTY0/MDAxNzE0NjU5ODI5NDM3.-N0hiwNrifbeYjHwAPD1OJF7NubNJLBeNXKhm8EMDygg.Te0-8061rCW6k-0-zIWGx-CdzRlokrjkPRH_Dd2XkPQg.PNG/%EC%97%90%EB%B2%84%ED%84%B4.png?type=w1600",
    home: "#0a4796",
    homeFont: "#ffffff",
    away: "#e84a46",
    awayFont: "#000000",
    third: "#a0a7a6",
    thirdFont: "#000000",
  },
  울버햄튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTcw/MDAxNzE0NjU5ODI5NDM1.iBB-FAU-y8cH_TWYBiwu_6Dv6kXj7NHvMsVjdStudXYg.C-5b6sS1GcncSKN3jWpEnKhXW4x9fxjMuceaSOKNkuAg.PNG/%EC%9A%B8%EB%B2%84%ED%96%84%ED%8A%BC.png?type=w1600",
    home: "#fcb917",
    homeFont: "#000000",
    away: "#dd1f00",
    awayFont: "#000000",
    third: "#78d0da",
    thirdFont: "#000000",
  },
  웨스트햄: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTM2/MDAxNzE0NjU5ODI5NDM1.WFTGF96iquEZgrVtQlY2xFrR41wiTZR57JRe1x7O95cg.T1MwQNtx6BlqK8s3YdP450EuZ-jFt0VSmCl5v4r6puIg.PNG/%EC%9B%A8%EC%8A%A4%ED%8A%B8%ED%96%84.png?type=w1600",
    home: "#7d2c3b",
    homeFont: "#ffffff",
    away: "#dcdcdc",
    awayFont: "#000000",
    third: "#0e4180",
    thirdFont: "#ffffff",
  },
  첼시: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjY5/MDAxNzE0NjU5ODI5NDM1.06hp-sjqCS_nPZrA3y5gs9krCiISGkjm0riZ4tIM0Ecg.XGKujvSSAh20JA8o3zQPN2XxSRdwTtd91bHIIobOf_0g.PNG/%EC%B2%BC%EC%8B%9C.png?type=w1600",
    home: "#034694",
    homeFont: "#ffffff",
    away: "#1f2d41",
    awayFont: "#ffffff",
    third: "#b2e5c7",
    thirdFont: "#000000",
  },
  "C.팰리스": {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjM3/MDAxNzE0NjU5ODI5NDM1.3eGEz-vEo7gnCWOwrpX8xISRA8mHBVN9y-d0OeTaeMIg.XpHFJQIukxmiL-KPoZQRNK2tiLatK48dkZmCf09D56gg.PNG/%ED%81%AC%ED%8C%B0.png?type=w1600",
    home: "#1a458f",
    homeFont: "#ffffff",
    away: "#dcdcdc",
    awayFont: "#000000",
    third: "#1a191e",
    thirdFont: "#ffffff",
  },
  토트넘: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjI4/MDAxNzE0NjYwNjUzMDcy.pa99JBMIzo7qPn-IEsRJxAPAaxrHylEztuTnqSFS9Xog.Q8NU1DYJoAScrnYEBqfiUXN9punj_4v9yuuaWPi3npcg.PNG/%ED%86%A0%ED%8A%B8%EB%84%98.png?type=w1600",
    home: "#dcdcdc",
    homeFont: "#000000",
    away: "#242b40",
    awayFont: "#ffffff",
    third: "#af8578",
    thirdFont: "#000000",
  },
  풀럼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjI2/MDAxNzE0NjU5ODI5NDIy.E3DtgJHDYC7iIAF2UkeaMExmBywZNbFQ2a1azR5Puwwg.LIcWTThtLA5asFIAupsGIhLZEE-GJHtVD7op71O15asg.PNG/%ED%92%80%EB%9F%BC.png?type=w1600",
    home: "#dcdcdc",
    homeFont: "#000000",
    away: "#ed2f7b",
    awayFont: "#000000",
    third: "#4d434c",
    thirdFont: "#ffffff",
  },
};

export default function Scoreboard() {
  const [title, setTitle] = useState("23-24 EPL 37R");
  const [teamInput, setTeamInput] = useState("");
  const [chromakeyColor, setChromakeyColor] = useState("#00ff00");

  const [team1, setTeam1] = useState("토트넘");
  const [team1Color, setTeam1Color] = useState("#dcdcdc");
  const [team1Font, setTeam1Font] = useState("#000000");
  const [team1CustomColor, setTeam1CustomColor] = useState("#ffffff");
  const [team1CustomColorActive, setTeam1CustomColorActive] = useState(false);
  const [team1Score, setTeam1Score] = useState(0);
  const [team1ListActive, setTeam1ListActive] = useState(false);
  const [team1ColorActive, setTeam1ColorActive] = useState(true);
  const [team1InputActive, setTeam1InputActive] = useState(false);

  const [team2, setTeam2] = useState("번리");
  const [team2Color, setTeam2Color] = useState("#5f0d41");
  const [team2Font, setTeam2Font] = useState("#ffffff");
  const [team2CustomColor, setTeam2CustomColor] = useState("#000000");
  const [team2CustomColorActive, setTeam2CustomColorActive] = useState(false);
  const [team2Score, setTeam2Score] = useState(0);
  const [team2ListActive, setTeam2ListActive] = useState(false);
  const [team2ColorActive, setTeam2ColorActive] = useState(true);
  const [team2InputActive, setTeam2InputActive] = useState(false);

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
  const [timerButtonActive, setTimerButtonActive] = useState(true);

  /** 타이머 시작 버튼 Click 함수 */
  const onClickTimerStart = () => {
    if (!timerButtonActive) return;
    setTimerButtonActive(false);

    timerId.current = setInterval(() => {
      time.current++;
      setMin(Math.floor(time.current / 60));
      setSecond(time.current % 60);
    }, 1000);
  };
  /** 타이머 일시 정지 버튼 Click 함수 */
  const onClickTimerPauseResume = () => {
    setTimerButtonActive(true);

    clearInterval(timerId.current);
  };

  /** Team1 팀 선택 버튼 클릭 함수 */
  const onClickTeam1ListActive = () => {
    if (team1ListActive === true) {
      setTeam1ListActive(false);
      setTeam1ColorActive(true);
      return;
    }
    setTeam1ColorActive(false);
    setTeam1InputActive(false);
    setTeam1ListActive(true);
  };

  /**  Team2 팀 선택 버튼 클릭 함수 */
  const onClickTeam2ListActive = () => {
    if (team2ListActive === true) {
      setTeam2ListActive(false);
      setTeam2ColorActive(true);
      return;
    }
    setTeam2ColorActive(false);
    setTeam2InputActive(false);
    setTeam2ListActive(true);
  };

  /** 팀1 직접입력 체인지 함수 */
  const onChangeTeam1 = (event) => {
    getDebounceTeam(event.target.value);
  };
  /** 팀2 직접입력 체인지 함수 */
  const onChangeTeam2 = (event) => {
    getDebounceTeam(event.target.value);
  };
  const getDebounceTeam = _.debounce((input) => {
    setTeamInput(input);
  }, 200);

  /** 팀1 수동 입력후 적용 버튼 클릭 함수 */
  const onClickTeam1Button = () => {
    const check = Object.keys(teamList).indexOf(teamInput) > -1;

    setTeam1(teamInput);
    setTeam1ColorActive(true);
    setTeam1InputActive(false);

    if (check) {
      setTeam1CustomColorActive(false);
      setTeam1Color(teamList[teamInput]["home"]);
      setTeam1Font(teamList[teamInput]["homeFont"]);
    } else {
      setTeam1CustomColorActive(true);
      setTeam1Color("#ffffff");
      setTeam1Font("#000000");
    }
  };

  /** 팀2 수동 입력후 적용 버튼 클릭 함수 */
  const onClickTeam2Button = () => {
    const check = Object.keys(teamList).indexOf(teamInput) > -1;

    setTeam2(teamInput);
    setTeam2ColorActive(true);
    setTeam2InputActive(false);

    if (check) {
      setTeam2CustomColorActive(false);
      setTeam2Color(teamList[teamInput]["away"]);
      setTeam2Font(teamList[teamInput]["awayFont"]);
    } else {
      setTeam2CustomColorActive(true);
      setTeam2Color("#000000");
      setTeam2Font("#ffffff");
    }
  };

  /** 팀1 스코어 변경 함수 */
  const onClickTeam1Score = (number) => {
    if (team1Score === 0 && number === -1) return;
    setTeam1Score((env) => env + number);
  };

  /** 팀2 스코어 변경 함수 */
  const onClickTeam2Score = (number) => {
    if (team2Score === 0 && number === -1) return;
    setTeam2Score((env) => env + number);
  };

  /** 타이머 시간 자동 적용 버튼 클릭 함수 */
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

  /** 시간 직접 적용 체인지 함수 */
  const onChangeTimeSetting = (event) => {
    const { id, value } = event.target;

    setInputTime({
      ...inputTime,
      [id]: value,
    });
  };

  /** 시간 직접 적용 클릭 함수 */
  const onClickTimeSetting = () => {
    setMin(inputTime.min);
    setSecond(inputTime.sec);
    setTimeNow("사용자설정");
    setIsTime(true);
    time.current = Number(inputTime.min) * 60 + Number(inputTime.sec);
  };

  /** 팀1 폰트 검/흰 변경 함수 */
  const onClickFont1Color = () => {
    if (team1Font === "#ffffff") setTeam1Font("#000000");
    else setTeam1Font("#ffffff");
  };
  /** 팀2 폰트 검/흰 변경 함수 */
  const onClickFont2Color = () => {
    if (team2Font === "#ffffff") setTeam2Font("#000000");
    else setTeam2Font("#ffffff");
  };

  /** 매치 타이틀 변경 체인지 함수 */
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  /** 팀1 커스텀팀 배경, 폰트 색상 변경 함수 */
  const onClickTeam1CustomColorChangeButton = (event) => {
    if (event.target.innerText === "흰배경 / 검은폰트로") {
      setTeam1Color("#ffffff");
      setTeam1Font("#000000");
    } else {
      setTeam1Color("#000000");
      setTeam1Font("#ffffff");
    }
  };

  /** 팀2 커스텀팀 배경, 폰트 색상 변경 함수 */
  const onClickTeam2CustomColorChangeButton = (event) => {
    if (event.target.innerText === "흰배경 / 검은폰트로") {
      setTeam2Color("#ffffff");
      setTeam2Font("#000000");
    } else {
      setTeam2Color("#000000");
      setTeam2Font("#ffffff");
    }
  };

  /** 팀1 홈, 어웨이, 서드 별 배경, 폰트 색상 변경 함수 */
  const onClickTeam1ColorChoice = (event) => {
    const choice = event.target.innerText;
    if (choice === "HOME") {
      setTeam1Color(teamList[team1]["home"]);
      setTeam1Font(teamList[team1]["homeFont"]);
    } else if (choice === "AWAY") {
      setTeam1Color(teamList[team1]["away"]);
      setTeam1Font(teamList[team1]["awayFont"]);
    } else {
      setTeam1Color(teamList[team1]["third"]);
      setTeam1Font(teamList[team1]["thirdFont"]);
    }
  };

  /** 팀2 홈, 어웨이, 서드 별 배경, 폰트 색상 변경 함수 */
  const onClickTeam2ColorChoice = (event) => {
    const choice = event.target.innerText;
    if (choice === "HOME") {
      setTeam2Color(teamList[team2]["home"]);
      setTeam2Font(teamList[team2]["homeFont"]);
    } else if (choice === "AWAY") {
      setTeam2Color(teamList[team2]["away"]);
      setTeam2Font(teamList[team2]["awayFont"]);
    } else {
      setTeam2Color(teamList[team2]["third"]);
      setTeam2Font(teamList[team2]["thirdFont"]);
    }
  };

  return (
    <ScoreboardUI
      isTime={isTime}
      timeNow={timeNow}
      title={title}
      teamList={teamList}
      team1={team1}
      team1Score={team1Score}
      team1Color={team1Color}
      team1ColorActive={team1ColorActive}
      team1ListActive={team1ListActive}
      team1Font={team1Font}
      team1CustomColor={team1CustomColor}
      team1CustomColorActive={team1CustomColorActive}
      team1InputActive={team1InputActive}
      setTeam1={setTeam1}
      setTeam1Color={setTeam1Color}
      setTeam1Font={setTeam1Font}
      setTeam1ColorActive={setTeam1ColorActive}
      setTeam1ListActive={setTeam1ListActive}
      setTeam1InputActive={setTeam1InputActive}
      team2={team2}
      team2Score={team2Score}
      team2Color={team2Color}
      team2ColorActive={team2ColorActive}
      team2ListActive={team2ListActive}
      team2Font={team2Font}
      team2CustomColor={team2CustomColor}
      team2CustomColorActive={team2CustomColorActive}
      team2InputActive={team2InputActive}
      setTeam2={setTeam2}
      setTeam2Color={setTeam2Color}
      setTeam2Font={setTeam2Font}
      setTeam2ColorActive={setTeam2ColorActive}
      setTeam2ListActive={setTeam2ListActive}
      setTeam2InputActive={setTeam2InputActive}
      chromakeyColor={chromakeyColor}
      setChromakeyColor={setChromakeyColor}
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
      onClickFont1Color={onClickFont1Color}
      onClickFont2Color={onClickFont2Color}
      onChangeTitle={onChangeTitle}
      setTeam1CustomColorActive={setTeam1CustomColorActive}
      setTeam2CustomColorActive={setTeam2CustomColorActive}
      onClickTeam1CustomColorChangeButton={onClickTeam1CustomColorChangeButton}
      onClickTeam2CustomColorChangeButton={onClickTeam2CustomColorChangeButton}
      setTeam1CustomColor={setTeam1CustomColor}
      setTeam2CustomColor={setTeam2CustomColor}
      onClickTeam1ColorChoice={onClickTeam1ColorChoice}
      onClickTeam2ColorChoice={onClickTeam2ColorChoice}
    ></ScoreboardUI>
  );
}
