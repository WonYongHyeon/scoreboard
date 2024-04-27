import styled from "@emotion/styled";

export default function DropDown(props) {
  const onClickList = (event) => {
    console.log(event.target.innerText);
    props.onClickTeamListActive();
    props.setTeam(event.target.innerText);
  };

  return (
    <Wrapper>
      <ul onClick={onClickList}>
        <TeamName>직접입력</TeamName>
        <TeamName>노팅엄</TeamName>
        <TeamName>뉴캐슬</TeamName>
        <TeamName>루턴타운</TeamName>
        <TeamName>리버풀</TeamName>
        <TeamName>맨시티</TeamName>
        <TeamName>맨유</TeamName>
        <TeamName>번리</TeamName>
        <TeamName>본머스</TeamName>
        <TeamName>브라이튼</TeamName>
        <TeamName>브렌트포드</TeamName>
        <TeamName>셰필드</TeamName>
        <TeamName>아스널</TeamName>
        <TeamName>아스톤빌라</TeamName>
        <TeamName>에버튼</TeamName>
        <TeamName>울버햄튼</TeamName>
        <TeamName>웨스트햄</TeamName>
        <TeamName>첼시</TeamName>
        <TeamName>C.팰리스</TeamName>
        <TeamName>토트넘</TeamName>
        <TeamName>풀럼</TeamName>
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
