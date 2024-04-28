"use client"; // this is a client component
import { useRef, useState } from "react";
import ScoreboardUI from "./scoreboard.presenter";
import _ from "lodash";

export default function Scoreboard() {
  const [title, setTitle] = useState("23-24 EPL 35R");
  const [teamInput, setTeamInput] = useState("");

  const [team1, setTeam1] = useState("토트넘");
  const [team2, setTeam2] = useState("아스널");
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

  const [team1Color, setTeam1Color] = useState("#ffffff");
  const [team2Color, setTeam2Color] = useState("#ff0000");
  const [chromakeyColor, setChromakeyColor] = useState("#00ff00");

  const [team1Font, setTeam1Font] = useState("black");
  const [team2Font, setTeam2Font] = useState("black");

  const onClickTimerStart = () => {
    timerId.current = setInterval(() => {
      time.current++;
      setMin(Math.floor(time.current / 60));
      setSecond(time.current % 60);
    }, 1000);
  };

  const onClickTimerPauseResume = () => {
    clearInterval(timerId.current);
  };

  const onClickTeam1ListActive = () => {
    setIsTeam1List((env) => !env);
    // setTeam1("");
  };
  const onClickTeam2ListActive = () => {
    setIsTeam2List((env) => !env);
    // setTeam2("");
  };

  const onChangeTeam1 = (event) => {
    getDebounceTem1(event.target.value);
  };
  const getDebounceTem1 = _.debounce((input) => {
    setTeamInput(input);
  }, 500);

  const onChangeTeam2 = (event) => {
    getDebounceTeam2(event.target.value);
  };
  const getDebounceTeam2 = _.debounce((input) => {
    setTeamInput(input);
  }, 200);

  const onClickTeam1Button = () => {
    setTeam1(teamInput);
  };
  const onClickTeam2Button = () => {
    setTeam2(teamInput);
  };

  const onClickTeam1Score = (number) => {
    setTeam1Score((env) => env + number);
  };
  const onClickTeam2Score = (number) => {
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
    if (team1Font === "white") setTeam1Font("black");
    else setTeam1Font("white");
  };
  const onClickFont2Color = () => {
    if (team2Font === "white") setTeam2Font("black");
    else setTeam2Font("white");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <ScoreboardUI
      isTime={isTime}
      timeNow={timeNow}
      title={title}
      team1={team1}
      team2={team2}
      setTeam1={setTeam1}
      setTeam2={setTeam2}
      team1Score={team1Score}
      team2Score={team2Score}
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
      team1Color={team1Color}
      team2Color={team2Color}
      chromakeyColor={chromakeyColor}
      setTeam1Color={setTeam1Color}
      setTeam2Color={setTeam2Color}
      setChromakeyColor={setChromakeyColor}
      team1Font={team1Font}
      team2Font={team2Font}
      onClickFont1Color={onClickFont1Color}
      onClickFont2Color={onClickFont2Color}
      onChangeTitle={onChangeTitle}
    ></ScoreboardUI>
  );
}
