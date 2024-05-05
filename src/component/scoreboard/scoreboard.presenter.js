import { HexColorPicker } from "react-colorful";
import DropDown from "../dropdown/dropdown";
import * as S from "./scoreboard.styles";
import Image from "next/image";

export default function ScoreboardUI(props) {
  return (
    <S.Body backColor={props.chromakeyColor}>
      <S.ScoreBoardAndColorPickerWrapper>
        <S.BWrapper>
          <S.BTitleWrapper>
            <S.BTitleLogoWrapper>
              <Image
                src="/haebelyn.png"
                alt="해블린"
                width={120}
                height={120}
                priority
              />
            </S.BTitleLogoWrapper>
            <S.BTitle>{props.title}</S.BTitle>
          </S.BTitleWrapper>
          <S.BTeam1 boardColor={props.team1Color} fontColor={props.team1Font}>
            <S.BTeamLogeWrapper>
              {Object.keys(props.teamList).indexOf(props.team1) === -1 || (
                <Image
                  src={props.teamList[props.team1]["src"]}
                  alt={props.teamList[props.team1]}
                  width={120}
                  height={120}
                  priority
                />
              )}
            </S.BTeamLogeWrapper>
            <S.BTeamName fontColor={props.team1Font}>
              {Object.keys(props.teamList).indexOf(props.teamInput) > -1
                ? props.teamList[props.team1]["name"]
                : props.team1}
            </S.BTeamName>
            <S.BTeamScore fontColor={props.team1Font}>
              {props.team1Score}
            </S.BTeamScore>
          </S.BTeam1>
          <S.BTeam2 boardColor={props.team2Color} fontColor={props.team2Font}>
            <S.BTeamScore fontColor={props.team2Font}>
              {props.team2Score}
            </S.BTeamScore>
            <S.BTeamName fontColor={props.team2Font}>{props.team2}</S.BTeamName>
            <S.BTeamLogeWrapper>
              {Object.keys(props.teamList).indexOf(props.team2) === -1 || (
                <Image
                  src={props.teamList[props.team2]["src"]}
                  alt={props.teamList[props.team2]}
                  width={120}
                  height={120}
                  priority
                />
              )}
            </S.BTeamLogeWrapper>
          </S.BTeam2>
          {props.isTime ? (
            <S.BTimerWrapper>
              <S.BTimerMin>{String(props.min).padStart(2, "0")}</S.BTimerMin>
              <S.BTimerColon> : </S.BTimerColon>
              <S.BTimerSec>{String(props.second).padStart(2, "0")}</S.BTimerSec>
            </S.BTimerWrapper>
          ) : (
            <S.BTimerWrapper>{props.timeNow}</S.BTimerWrapper>
          )}
        </S.BWrapper>
      </S.ScoreBoardAndColorPickerWrapper>
      <S.HandleBoxWrapper>
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>Team 1</S.HandleBoxTitle>
          <S.HandleBox>
            <div>
              <S.SelectTeam onClick={props.onClickTeam1ListActive}>
                {props.team1}
              </S.SelectTeam>
              {props.isTeam1List && (
                <DropDown
                  setIsTeamList={props.setIsTeam1List}
                  setTeamColor={props.setTeam1Color}
                  setTeamFont={props.setTeam1Font}
                  setTeam={props.setTeam1}
                  teamList={props.teamList}
                  teamInfo="home"
                  setTeamCustomBackColorActive={
                    props.setTeam1CustomBackColorActive
                  }
                  setTeamColorActive={props.setTeam1ColorActive}
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
            </div>
            <S.TeamScoreCustomColorWrapper>
              {props.team1ColorActive &&
                (props.team1CustomBackColorActive ? (
                  <S.TeamCustomFontColorWrapper>
                    {props.team1Color === "#000000" ? (
                      <S.CustomColorFontWhiteBlack
                        onClick={props.onClickTeam1CustomColorChangeButton}
                      >
                        흰배경 / 검은폰트로
                      </S.CustomColorFontWhiteBlack>
                    ) : (
                      <S.CustomColorFontWhiteBlack
                        onClick={props.onClickTeam1CustomColorChangeButton}
                      >
                        검은배경 / 흰폰트로
                      </S.CustomColorFontWhiteBlack>
                    )}
                  </S.TeamCustomFontColorWrapper>
                ) : (
                  <S.TeamCustomFontColorWrapper>
                    <S.CustomColorFontWhiteBlack
                      onClick={props.onClickTeam1ColorChoice}
                    >
                      HOME
                    </S.CustomColorFontWhiteBlack>
                    <S.CustomColorFontWhiteBlack
                      onClick={props.onClickTeam1ColorChoice}
                    >
                      AWAY
                    </S.CustomColorFontWhiteBlack>
                    <S.CustomColorFontWhiteBlack
                      onClick={props.onClickTeam1ColorChoice}
                    >
                      THIRD
                    </S.CustomColorFontWhiteBlack>
                  </S.TeamCustomFontColorWrapper>
                ))}
              <S.ScoreWrapper>
                <S.ScoreBoxTitle>스코어</S.ScoreBoxTitle>
                <S.ScoreBoxWrapper>
                  <S.ScoreBox onClick={() => props.onClickTeam1Score(-1)}>
                    -
                  </S.ScoreBox>
                  <S.ScoreBoxPre>{props.team1Score}</S.ScoreBoxPre>
                  <S.ScoreBox onClick={() => props.onClickTeam1Score(1)}>
                    +
                  </S.ScoreBox>
                </S.ScoreBoxWrapper>
              </S.ScoreWrapper>
            </S.TeamScoreCustomColorWrapper>
          </S.HandleBox>
        </S.TeamHandleBoxWrapper>
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>Team 2</S.HandleBoxTitle>
          <S.HandleBox>
            <div>
              <S.SelectTeam onClick={props.onClickTeam2ListActive}>
                {props.team2}
              </S.SelectTeam>
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
            </div>
            {props.isTeam2List && (
              <DropDown
                setIsTeamList={props.setIsTeam2List}
                setTeamColor={props.setTeam2Color}
                setTeamFont={props.setTeam2Font}
                setTeam={props.setTeam2}
                teamList={props.teamList}
                teamInfo="away"
                setTeamCustomBackColorActive={
                  props.setTeam2CustomBackColorActive
                }
                setTeamColorActive={props.setTeam2ColorActive}
              />
            )}

            <S.TeamScoreCustomColorWrapper>
              {props.team2ColorActive &&
                (props.team2CustomBackColorActive ? (
                  <S.TeamCustomFontColorWrapper>
                    {props.team2Color === "#000000" ? (
                      <S.CustomColorFontWhiteBlack
                        onClick={props.onClickTeam2CustomColorChangeButton}
                      >
                        흰배경 / 검은폰트로
                      </S.CustomColorFontWhiteBlack>
                    ) : (
                      <S.CustomColorFontWhiteBlack
                        onClick={props.onClickTeam2CustomColorChangeButton}
                      >
                        검은배경 / 흰폰트로
                      </S.CustomColorFontWhiteBlack>
                    )}
                  </S.TeamCustomFontColorWrapper>
                ) : (
                  <S.TeamCustomFontColorWrapper>
                    <S.CustomColorFontWhiteBlack
                      onClick={props.onClickTeam2ColorChoice}
                    >
                      HOME
                    </S.CustomColorFontWhiteBlack>
                    <S.CustomColorFontWhiteBlack
                      onClick={props.onClickTeam2ColorChoice}
                    >
                      AWAY
                    </S.CustomColorFontWhiteBlack>
                    <S.CustomColorFontWhiteBlack
                      onClick={props.onClickTeam2ColorChoice}
                    >
                      THIRD
                    </S.CustomColorFontWhiteBlack>
                  </S.TeamCustomFontColorWrapper>
                ))}
              <S.ScoreWrapper>
                <S.ScoreBoxTitle>스코어</S.ScoreBoxTitle>
                <S.ScoreBoxWrapper>
                  <S.ScoreBox onClick={() => props.onClickTeam2Score(-1)}>
                    -
                  </S.ScoreBox>
                  <S.ScoreBoxPre>{props.team2Score}</S.ScoreBoxPre>
                  <S.ScoreBox onClick={() => props.onClickTeam2Score(1)}>
                    +
                  </S.ScoreBox>
                </S.ScoreBoxWrapper>
              </S.ScoreWrapper>
            </S.TeamScoreCustomColorWrapper>
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
                    placeholder="0"
                  ></S.TimeInput>
                </S.TimeSettingInputWrapper>
                <S.TimeSettingInputWrapper>
                  <S.TimeSettingTitle>초</S.TimeSettingTitle>
                  <S.TimeInput
                    id="sec"
                    onChange={props.onChangeTimeSetting}
                    placeholder="0"
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
        <S.TeamHandleBoxWrapper>
          <S.HandleBoxTitle>크로마키 색상</S.HandleBoxTitle>
          <S.HandleBox>
            <HexColorPicker
              style={{ width: "300px", height: "300px" }}
              color={props.chromakeyColor}
              onChange={props.setChromakeyColor}
            />
          </S.HandleBox>
        </S.TeamHandleBoxWrapper>
      </S.HandleBoxWrapper>
    </S.Body>
  );
}
