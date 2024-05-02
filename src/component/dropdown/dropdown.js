import styled from "@emotion/styled";

export default function DropDown(props) {
  const onClickList = (event) => {
    const team = event.target.innerText;

    if (team === "직접입력") {
      if (props.teamInfo === "home") {
        props.setTeamColor("#ffffff");
        props.setTeamFont("#000000");
      } else {
        props.setTeamColor("#000000");
        props.setTeamFont("#ffffff");
      }
    } else {
      props.setTeamCustomBackColorActive(false);

      if (props.teamInfo === "home") {
        props.setTeamColor(props.teamList[team]["home"]);
        props.setTeamFont(props.teamList[team]["homeFont"]);
      } else {
        props.setTeamColor(props.teamList[team]["away"]);
        props.setTeamFont(props.teamList[team]["awayFont"]);
      }
    }

    props.onClickTeamListActive();
    props.setTeam(event.target.innerText);
  };

  return (
    <Wrapper>
      <ul onClick={onClickList}>
        <TeamName id="null">직접입력</TeamName>
        <TeamName id="nottingham">노팅엄</TeamName>
        <TeamName id="newcastle">뉴캐슬</TeamName>
        <TeamName id="lutonTown">루턴타운</TeamName>
        <TeamName id="liverpool">리버풀</TeamName>
        <TeamName id="manCity">맨시티</TeamName>
        <TeamName id="manUnited">맨유</TeamName>
        <TeamName id="burnley">번리</TeamName>
        <TeamName id="bournemouth">본머스</TeamName>
        <TeamName id="brighton">브라이튼</TeamName>
        <TeamName id="brentford">브렌트포드</TeamName>
        <TeamName id="sheffield">셰필드</TeamName>
        <TeamName id="arsenal">아스날</TeamName>
        <TeamName id="aston">아스톤빌라</TeamName>
        <TeamName id="everton">에버튼</TeamName>
        <TeamName id="wolverhampton">울버햄튼</TeamName>
        <TeamName id="westHam">웨스트햄</TeamName>
        <TeamName id="chelsea">첼시</TeamName>
        <TeamName id="crystalPalace">C.팰리스</TeamName>
        <TeamName id="tottenham">토트넘</TeamName>
        <TeamName id="fulham">풀럼</TeamName>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-y: auto;
  height: 150px;
`;

const TeamName = styled.li`
  margin: 0;
  padding: 0 10px;
  list-style: none;
  font-size: 20px;
  /* width: 50px; */
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;
