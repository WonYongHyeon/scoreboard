import styled from "@emotion/styled";

export const Body = styled.div`
  background-color: ${(props) => props.backColor};
  width: 1920px;
  padding: 30px 30px 0 30px;
`;
export const ScoreBoardAndColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TimerStartButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
`;

export const HandleBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  padding: 30px;
  margin-top: 30px;
  border-radius: 20px;
`;

export const TeamHandleBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
`;

export const HandleBoxTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px 5px 0 0;
  background-color: gray;
  padding: 10px 20px;
`;

export const HandleBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectTeam = styled.div`
  min-width: 150px;
  word-break: break-all;
  background-color: black;
  border: 2px solid white;
  margin: 10px;
  text-align: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  color: white;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const TeamInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const TeamInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
`;

export const TeamInputSubmit = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: 2px solid white;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const ScoreWrapper = styled.div`
  /* width: 200px; */
  /* height: 100px; */
  display: flex;
  flex-direction: row;
`;

export const ScoreBoxTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  padding: 10px;
  text-align: center;
  width: 120px;
`;

export const ScoreBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 176px;
  padding: 0 10px;
`;

export const ScoreBox = styled.div`
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  background-color: black;
  color: white;
  cursor: pointer;
  /* margin: 10px; */
  text-align: center;
  border: 2px solid white;
  line-height: 50px;

  :hover {
    background-color: white;
    color: black;
  }
`;
export const ScoreBoxPre = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 70px;
  text-align: center;
`;

export const TimeWrapper = styled.div`
  display: flex;
`;

export const TimeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 300px;
`;

export const TimeButton = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 100px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  border: 2px solid white;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const TimeSettingWrapper = styled.div`
  width: 170px;
  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  background-color: black;
  justify-content: space-between;
  border-radius: 10px;
`;
export const TimeSettingInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const TimeSettingTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  color: white;
  text-align: center;
`;

export const TimeInput = styled.input`
  width: 100px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  padding: 0 10px;
`;

export const TimeSettingButton = styled.div`
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  text-align: center;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const BoardTimerButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const BoardTimerButton = styled.div`
  height: 40px;
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  margin: 10px;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const BoardColorTeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  height: 300px;
`;
export const BoardColorTeam = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 10px;
  border: 2px solid white;
  border-radius: 10px;
`;

export const BoardColorTeamTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 0 0 5px 0;
`;

export const CustomColorFontWhiteBlack = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  border: 2px solid white;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
  /* margin: 10px 0 10px 40px; */
  cursor: pointer;
  margin-top: 5px;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const MatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const MatchTitleInput = styled.input`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const MatchTitleSubmit = styled.div`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
  border: 2px solid white;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const BWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 875px;
  height: 490px;
`;

export const BTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BTitleLogoWrapper = styled.div`
  margin-left: 100px;
  width: 120px;
  height: 120px;
`;

export const BTitle = styled.div`
  width: 480px;
  height: 70px;
  font-size: ${(props) => 650 / props.title.length + "px"};
  line-height: 70px;
  font-weight: bold;
  margin-top: 50px;
  background-color: white;
  text-align: center;
  border-radius: 40px 40px 0 0;
`;

export const BTeam1 = styled.div`
  width: 800px;
  height: 150px;
  border-radius: 75px 75px 0 75px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.boardColor};
  color: ${(props) => props.fontColor};
`;

export const BTeam2 = styled.div`
  width: 800px;
  height: 150px;
  margin-left: 75px;
  border-radius: 0 75px 75px 75px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.boardColor};
  color: ${(props) => props.fontColor};
`;

export const BTeamLogeWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const BTeamName = styled.div`
  width: 500px;
  height: 150px;

  font-size: ${(props) =>
    props.team.length < 9 ? "70px" : 550 / props.team.length + "px"};
  line-height: 150px;
  text-align: center;
  font-weight: bold;
`;

export const BTeamScore = styled.div`
  width: 150px;
  height: 150px;
  font-size: 100px;
  line-height: 150px;
  font-weight: bold;
  text-align: center;
  text-align: center;
`;

export const BTimerWrapper = styled.div`
  margin: auto;
  width: 200px;
  height: 70px;
  font-size: 40px;
  font-weight: bold;
  line-height: 70px;
  background-color: black;
  border-radius: 0 0 30px 30px;
  text-align: center;
  color: white;
  display: flex;
`;
export const BTimerMin = styled.div`
  width: 90px;
  font-size: 40px;
  font-weight: bold;
  line-height: 70px;
  text-align: right;
`;
export const BTimerSec = styled.div`
  width: 90px;
  font-size: 40px;
  font-weight: bold;
  line-height: 70px;
  text-align: left;
`;
export const BTimerColon = styled.div`
  width: 20px;
  font-size: 40px;
  font-weight: bold;
  line-height: 70px;
`;

export const SettingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const TeamScoreCustomColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* height: 123.5px; */
`;

export const TeamCustomFontColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5px;
  gap: 10px;
  height: 50px;
`;
