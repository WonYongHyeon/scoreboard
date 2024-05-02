"use client"; // this is a client component
import { useRef, useState } from "react";
import ScoreboardUI from "./scoreboard.presenter";
import _ from "lodash";

const teamList = {
  노팅엄: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTE1/MDAxNzE0NjU5ODI5NDI3.-IcqnldClzNpTgB6jYwLUpK77qImR8dM_hKhRjfvxmUg.wRVSXT56ubRKV3PWaO-6bJL9n8RxZZo6bZ6Z7tERoJQg.PNG/%EB%85%B8%ED%8C%85%EC%97%84.png?type=w1600",
    home: "#cf1e2a",
    away: "#90d5ea",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  뉴캐슬: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfODUg/MDAxNzE0NjU5ODI5NDM2.PuS_w4uqO6tBkXnQFIf9xPHgv-pOaxS51I1op0r6ekYg.QpAGsZ4MdN_qI_wJbJIBgA76cso18EoJBAjND2_2wJAg.PNG/%EB%89%B4%EC%BA%90%EC%8A%AC.png?type=w1600",
    home: "#393939",
    away: "#19978f",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  루턴타운: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMiAg/MDAxNzE0NjU5ODI5NDM1.qm4Rb9FKjdQ74ArRYnLYhFY7qer6V9V0PcjXH4a7tiMg.Ibku1uOqGs4rHUYX7b7Qq7v849L8-yfFksLVHTywVpwg.PNG/%EB%A3%A8%ED%84%B4%ED%83%80%EC%9A%B4.png?type=w1600",
    home: "#ff7900",
    away: "#ffffff",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  리버풀: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMiAg/MDAxNzE0NjU5ODI5NDM1.FuSG67yVuqIaWBtTX5_PTmgTirbRDPY8ClEOZ701TBIg.W5plEypS2rZPKGpRQLx9Zhe90znTEalcSDFudZ9lA_Ig.PNG/%EB%A6%AC%EB%B2%84%ED%92%80.png?type=w1600",
    home: "#d41e24",
    away: "#16ac6c",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  맨시티: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTQg/MDAxNzE0NjU5ODI5NDM2.lKKSvhhU92I9QdlnITXIm7t61CxGMCCbCvBEfJQd1G0g.-XUyox8aIhfMj_yB5KgSlet_EFC2DhEHGn6vrmAZNwIg.PNG/%EB%A7%A8%EC%8B%9C%ED%8B%B0.png?type=w1600",
    home: "#98c5ea",
    away: "#e7e7e7",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  맨유: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjU3/MDAxNzE0NjU5ODI5NDM1.3-tUtxN4Iv9uufnbIG60HOAO45x7z_8W9jy-Oj42Iucg.4dfDvrB1YFyRJyBmcy79hDuKuKsLt1KR8loEkIYZfuwg.PNG/%EB%A7%A8%EC%9C%A0.png?type=w1600",
    home: "#da1f0d",
    away: "#344f4e",
    homeFont: "#000000",
    awayFont: "#ffffff",
  },
  번리: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfNDUg/MDAxNzE0NjYxMjYwODE2.Yh7ZbaR3E_2Q4BR5aEFcIyCjGlf_p9-SG-fVF9cF8pEg.BLhKaQ09yjl76irkUZunhS7K4KxJ9HlYcCPwHKZ49_Ug.PNG/%EB%B2%88%EB%A6%AC1.png?type=w1600",
    home: "#5f0d41",
    away: "#dee16e",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  본머스: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjI0/MDAxNzE0NjU5ODI5NDMy.KovhqfQLFkB0FhCHBfjYxJditVb3TGeAjlkkKkxwflYg.acWa__2W-zeLNRygcd-u0_69kVO1cYLm3Du8y9mZXi8g.PNG/%EB%B3%B8%EB%A8%B8%EC%8A%A4.png?type=w1600",
    home: "#ff2600",
    away: "#b7dbee",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  브라이튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjkz/MDAxNzE0NjU5ODI5NDM0.mpWx84-qKLeC59dJDriTEIEZEgR1EGvaeEFKws77W8kg.I9_MC5YIqxWtZBr3Aet53qkRcsOM5DLXwY8cVTKcTU0g.PNG/%EB%B8%8C%EB%9D%BC%EC%9D%B4%ED%84%B4.png?type=w1600",
    home: "#005daa",
    away: "#02cf5d",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  브렌트포드: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfNyAg/MDAxNzE0NjU5ODI5NDM0.aDh9Q7S9JmixM35xZEjiSP9ULf1vbCCdzULWnynOuqAg.pgYbLx2LSae_sL0rRZfXi3U3izRs8RmYBN_hoOYMMdAg.PNG/%EB%B8%8C%EB%A0%8C%ED%8A%B8%ED%8D%BC%EB%93%9C.png?type=w1600",
    home: "#df323f",
    away: "#9ec2e5",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  셰필드: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfOTgg/MDAxNzE0NjU5ODI5NDM0.B70AoG8ucrpJVWQO16yfkKs4XN0chr1LagSL6VfIXx0g.mjx5OIvbPtpg9H-jIQ4xSfkCjFZS7CmEVxDDQjV3yY8g.PNG/%EC%85%B0%ED%95%84%EB%93%9C.png?type=w1600",
    home: "#b01600",
    away: "#000000",
    homeFont: "#ffffff",
    awayFont: "#ffffff",
  },
  아스날: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfOTMg/MDAxNzE0NjU5ODI5NDI1.vv_wfzjzyrL6sdWQwmZxdY3l2J_mt5xSuAdtln37fWIg.-Ll-eRgMrVf2pzScMQsJr5YpUr7qJLKqGbij7XWPL0gg.PNG/%EC%95%84%EC%8A%A4%EB%82%A0.png?type=w1600",
    home: "#c71c27",
    away: "#d4fb33",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  아스톤빌라: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjg3/MDAxNzE0NjU5ODI5NDE2.AvUfs1LwPbAiJQC9yviPqIB7x5c0MLXze1eZ7ChMIFwg.ILu25CxFzFXVsvRYUAE4yX7_vlv5d5-f4xyM_q8Lokcg.PNG/%EC%95%A0%EC%8A%A4%ED%84%B4%EB%B9%8C%EB%9D%BC.png?type=w1600",
    home: "#660c34",
    away: "#ffffff",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  에버튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTY0/MDAxNzE0NjU5ODI5NDM3.-N0hiwNrifbeYjHwAPD1OJF7NubNJLBeNXKhm8EMDygg.Te0-8061rCW6k-0-zIWGx-CdzRlokrjkPRH_Dd2XkPQg.PNG/%EC%97%90%EB%B2%84%ED%84%B4.png?type=w1600",
    home: "#0a4796",
    away: "#e84a46",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  울버햄튼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTcw/MDAxNzE0NjU5ODI5NDM1.iBB-FAU-y8cH_TWYBiwu_6Dv6kXj7NHvMsVjdStudXYg.C-5b6sS1GcncSKN3jWpEnKhXW4x9fxjMuceaSOKNkuAg.PNG/%EC%9A%B8%EB%B2%84%ED%96%84%ED%8A%BC.png?type=w1600",
    home: "#fcb917",
    away: "#1993ab",
    homeFont: "#000000",
    awayFont: "#000000",
  },
  웨스트햄: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMTM2/MDAxNzE0NjU5ODI5NDM1.WFTGF96iquEZgrVtQlY2xFrR41wiTZR57JRe1x7O95cg.T1MwQNtx6BlqK8s3YdP450EuZ-jFt0VSmCl5v4r6puIg.PNG/%EC%9B%A8%EC%8A%A4%ED%8A%B8%ED%96%84.png?type=w1600",
    home: "#7d2c3b",
    away: "#ffffff",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  첼시: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjY5/MDAxNzE0NjU5ODI5NDM1.06hp-sjqCS_nPZrA3y5gs9krCiISGkjm0riZ4tIM0Ecg.XGKujvSSAh20JA8o3zQPN2XxSRdwTtd91bHIIobOf_0g.PNG/%EC%B2%BC%EC%8B%9C.png?type=w1600",
    home: "#034694",
    away: "#1f2d41",
    homeFont: "#ffffff",
    awayFont: "#ffffff",
  },
  "C.팰리스": {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjM3/MDAxNzE0NjU5ODI5NDM1.3eGEz-vEo7gnCWOwrpX8xISRA8mHBVN9y-d0OeTaeMIg.XpHFJQIukxmiL-KPoZQRNK2tiLatK48dkZmCf09D56gg.PNG/%ED%81%AC%ED%8C%B0.png?type=w1600",
    home: "#1a458f",
    away: "#ffffff",
    homeFont: "#ffffff",
    awayFont: "#000000",
  },
  토트넘: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjI4/MDAxNzE0NjYwNjUzMDcy.pa99JBMIzo7qPn-IEsRJxAPAaxrHylEztuTnqSFS9Xog.Q8NU1DYJoAScrnYEBqfiUXN9punj_4v9yuuaWPi3npcg.PNG/%ED%86%A0%ED%8A%B8%EB%84%98.png?type=w1600",
    home: "#ffffff",
    away: "#242b40",
    homeFont: "#000000",
    awayFont: "#ffffff",
  },
  풀럼: {
    src: "https://cafeptthumb-phinf.pstatic.net/MjAyNDA1MDJfMjI2/MDAxNzE0NjU5ODI5NDIy.E3DtgJHDYC7iIAF2UkeaMExmBywZNbFQ2a1azR5Puwwg.LIcWTThtLA5asFIAupsGIhLZEE-GJHtVD7op71O15asg.PNG/%ED%92%80%EB%9F%BC.png?type=w1600",
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
