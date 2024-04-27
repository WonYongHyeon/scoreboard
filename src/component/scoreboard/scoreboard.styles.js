import styled from "@emotion/styled";

export const Body = styled.div`
  background-color: gray;
  height: 100vh;
  padding: 30px;
`;
export const ScoreBoardAndColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ScoreBoardWrapper = styled.div`
  padding: 10px;
  width: 800px;
  height: 300px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScoreTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: end;
`;

export const ScoreTitle = styled.div`
  font-family: var(--font-maple);
  width: 400px;
  height: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 20px 20px 0 0;
  background-color: white;
  border-top: 3px solid black;
  border-right: 3px solid black;
  border-left: 3px solid black;
`;

export const TeamBoardWrapper = styled.div`
  display: flex;
`;

export const Team1board = styled.div`
  width: 350px;
  height: 100px;
  border-radius: 50px 0 0 50px;
  background-color: ${(props) => props.boardColor};
  line-height: 100px;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Team2board = styled.div`
  width: 350px;
  height: 100px;
  border-radius: 0 50px 50px 0;
  background-color: ${(props) => props.boardColor};
  line-height: 100px;
  border-top: 3px solid black;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: white;
  border: 3px solid black;
`;

export const TeamName = styled.p`
  width: 300px;
  font-size: 40px;
  font-weight: bold;
  padding: 0 5px;
  text-align: center;
  align-items: center;
  color: ${(props) => props.fontColor};
`;

export const Score = styled.p`
  width: 50px;
  font-size: 50px;
  font-weight: bold;
  padding: 0 5px;
  text-align: center;
  align-items: center;
  color: ${(props) => props.fontColor};
`;

export const Timer = styled.div`
  width: 100px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  background-color: black;
  border-radius: 0 0 10px 10px;
  text-align: center;
  border-left: 3px solid black;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  color: white;
`;

export const TimerStartButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 30px;
  /* margin: 30px 0; */
`;

export const HandleBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  padding: 30px;
  width: 1500px;
  margin-top: 30px;
  border-radius: 20px;
`;

export const TeamHandleBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const HandleBoxTitle = styled.div`
  /* height: 40px; */
  font-size: 30px;
  border: 2px solid white;
  border-radius: 5px 5px 0 0;
  background-color: gray;
  padding: 10px 20px;
  /* text-align: center; */
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
  width: 150px;
  background-color: black;
  border: 2px solid white;
  margin: 10px;
  text-align: center;
  justify-content: center;
  font-size: 30px;
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
  width: 150px;
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
  flex-direction: column;
`;

export const ScoreBoxTitle = styled.p`
  font-size: 30px;
  padding: 10px;
`;

export const ScoreBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ScoreBox = styled.div`
  width: 50px;
  height: 50px;
  font-size: 40px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px;
  text-align: center;
  border: 2px solid white;
  line-height: 40px;

  :hover {
    background-color: white;
    color: black;
  }
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
  border-radius: 5px;
  padding: 0 10px;
`;

export const TimeSettingButton = styled.div`
  cursor: pointer;
  width: 100%;
  font-size: 20px;
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
  padding: 0 0 5px 0;
`;

export const FontWhiteBlack = styled.div`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  border: 2px solid white;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  margin: 10px 0 10px 40px;
  cursor: pointer;

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
