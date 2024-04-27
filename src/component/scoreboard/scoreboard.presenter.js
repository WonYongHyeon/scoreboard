import { SketchPicker } from "react-color";
import DropDown from "../dropdown/dropdown";
import * as S from "./scoreboard.styles";
import Image from "next/image";

export default function ScoreboardUI(props) {
  return (
    <S.Body>
      <S.ScoreBoardAndColorPickerWrapper>
        <S.ScoreBoardWrapper>
          <S.ScoreTitleWrapper>
            <Image
              src="/haebelyn.png"
              alt="해블린"
              width={130}
              height={130}
              priority
            />
            <S.ScoreTitle>{props.title}</S.ScoreTitle>
          </S.ScoreTitleWrapper>
          <S.TeamBoardWrapper>
            <S.Team1board boardColor={props.team1Color}>
              {/* <S.ImageWrapper>
              <Image
                src="/liverpool.png"
                alt="해블린"
                width={60}
                height={80}
                priority
              />
            </S.ImageWrapper> */}
              <S.TeamName fontColor={props.team1Font}>{props.team1}</S.TeamName>
              <S.Score fontColor={props.team1Font}>{props.team1Score}</S.Score>
            </S.Team1board>
            <S.Team2board boardColor={props.team2Color}>
              <S.Score fontColor={props.team2Font}>{props.team2Score}</S.Score>
              <S.TeamName fontColor={props.team2Font}>{props.team2}</S.TeamName>
              {/* <S.ImageWrapper>
              <Image
                src="/tot.png"
                alt="토트넘"
                width={80}
                height={80}
                priority
              />
            </S.ImageWrapper> */}
            </S.Team2board>
          </S.TeamBoardWrapper>
          {props.isTime ? (
            <S.Timer>
              {String(props.min).padStart(2, "0")} :{" "}
              {String(props.second).padStart(2, "0")}
            </S.Timer>
          ) : (
            <S.Timer>{props.timeNow}</S.Timer>
          )}
        </S.ScoreBoardWrapper>
        <S.BoardColorTeamWrapper>
          <S.BoardColorTeam>
            <S.BoardColorTeamTitle>Team1 보드 색상</S.BoardColorTeamTitle>
            <SketchPicker
              width="250px"
              color={props.team1Color}
              onChange={props.onChangeColorPickerTeam1}
            />
          </S.BoardColorTeam>
          <S.BoardColorTeam>
            <S.BoardColorTeamTitle>Team2 보드 색상</S.BoardColorTeamTitle>
            <SketchPicker
              width="250px"
              color={props.team2Color}
              onChange={props.onChangeColorPickerTeam2}
            />
          </S.BoardColorTeam>
        </S.BoardColorTeamWrapper>
      </S.ScoreBoardAndColorPickerWrapper>
      <S.HandleBoxWrapper>
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>Team 1</S.HandleBoxTitle>
          <S.HandleBox>
            <S.SelectTeam onClick={props.onClickTeam1ListActive}>
              {props.team1}
            </S.SelectTeam>
            {props.isTeam1List && (
              <DropDown
                onClickTeamListActive={props.onClickTeam1ListActive}
                setTeam={props.setTeam1}
              />
            )}
            {props.team1 === "직접입력" && (
              <S.TeamInputWrapper>
                <S.TeamInput
                  onChange={props.onChangeTeam1}
                  placeholder="직접입력"
                ></S.TeamInput>
                <S.TeamInputSubmit onClick={props.onClickTeam1Button}>
                  적용
                </S.TeamInputSubmit>
              </S.TeamInputWrapper>
            )}
            <S.ScoreWrapper>
              <S.ScoreBoxTitle>스코어</S.ScoreBoxTitle>
              <S.ScoreBoxWrapper>
                <S.ScoreBox onClick={() => props.onClickTeam1Score(-1)}>
                  -
                </S.ScoreBox>
                <S.ScoreBox onClick={() => props.onClickTeam1Score(1)}>
                  +
                </S.ScoreBox>
                {props.team1Font === "white" ? (
                  <S.FontWhiteBlack onClick={props.onClickFont1Color}>
                    검은 폰트로
                  </S.FontWhiteBlack>
                ) : (
                  <S.FontWhiteBlack onClick={props.onClickFont1Color}>
                    흰 폰트로
                  </S.FontWhiteBlack>
                )}
              </S.ScoreBoxWrapper>
            </S.ScoreWrapper>
          </S.HandleBox>
        </S.TeamHandleBoxWrapper>
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>Team 2</S.HandleBoxTitle>
          <S.HandleBox>
            <S.SelectTeam onClick={props.onClickTeam2ListActive}>
              {props.team2}
            </S.SelectTeam>
            {props.isTeam2List && (
              <DropDown
                onClickTeamListActive={props.onClickTeam2ListActive}
                setTeam={props.setTeam2}
              />
            )}
            {props.team2 === "직접입력" && (
              <S.TeamInputWrapper>
                <S.TeamInput
                  onChange={props.onChangeTeam2}
                  placeholder="직접입력"
                ></S.TeamInput>
                <S.TeamInputSubmit onClick={props.onClickTeam2Button}>
                  적용
                </S.TeamInputSubmit>
              </S.TeamInputWrapper>
            )}
            <S.ScoreWrapper>
              <S.ScoreBoxTitle>스코어</S.ScoreBoxTitle>
              <S.ScoreBoxWrapper>
                <S.ScoreBox onClick={() => props.onClickTeam2Score(-1)}>
                  -
                </S.ScoreBox>
                <S.ScoreBox onClick={() => props.onClickTeam2Score(1)}>
                  +
                </S.ScoreBox>
                {props.team2Font === "white" ? (
                  <S.FontWhiteBlack onClick={props.onClickFont2Color}>
                    검은 폰트로
                  </S.FontWhiteBlack>
                ) : (
                  <S.FontWhiteBlack onClick={props.onClickFont2Color}>
                    흰 폰트로
                  </S.FontWhiteBlack>
                )}
              </S.ScoreBoxWrapper>
            </S.ScoreWrapper>
          </S.HandleBox>
        </S.TeamHandleBoxWrapper>
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>시간</S.HandleBoxTitle>
          <S.HandleBox>
            <S.TimeWrapper>
              <S.TimeButtonWrapper>
                <S.TimeButton onClick={props.onClickTimeButton}>
                  전반
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickTimeButton}>
                  후반
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickTimeButton}>
                  연장전반
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickTimeButton}>
                  연장후반
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickTimeButton}>
                  하프타임
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickTimeButton}>
                  승부차기
                </S.TimeButton>
              </S.TimeButtonWrapper>
              <S.TimeSettingWrapper>
                <S.TimeSettingInputWrapper>
                  <S.TimeSettingTitle>분</S.TimeSettingTitle>
                  <S.TimeInput
                    id="min"
                    onChange={props.onChangeTimeSetting}
                  ></S.TimeInput>
                </S.TimeSettingInputWrapper>
                <S.TimeSettingInputWrapper>
                  <S.TimeSettingTitle>초</S.TimeSettingTitle>
                  <S.TimeInput
                    id="sec"
                    onChange={props.onChangeTimeSetting}
                  ></S.TimeInput>
                </S.TimeSettingInputWrapper>
                <S.TimeSettingButton onClick={props.onClickTimeSetting}>
                  적용
                </S.TimeSettingButton>
                <S.BoardTimerButtonWrapper>
                  <S.BoardTimerButton onClick={props.onClickTimerStart}>
                    시작
                  </S.BoardTimerButton>
                  <S.BoardTimerButton onClick={props.onClickTimerPauseResume}>
                    중지
                  </S.BoardTimerButton>
                </S.BoardTimerButtonWrapper>
              </S.TimeSettingWrapper>
            </S.TimeWrapper>
          </S.HandleBox>
        </S.TeamHandleBoxWrapper>
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>매치 타이틀</S.HandleBoxTitle>
          <S.HandleBox>
            <S.MatchWrapper>
              <S.MatchTitleInput
                onChange={props.onChangeTitle}
                value={props.title}
              ></S.MatchTitleInput>
            </S.MatchWrapper>
          </S.HandleBox>
        </S.TeamHandleBoxWrapper>
      </S.HandleBoxWrapper>
    </S.Body>
  );
}
