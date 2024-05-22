import * as S from "./main.styles";

export default function MainUI(props) {
  return (
    <S.Body>
      <S.SelectBox onClick={props.onClickScoreboard}>스코어보드</S.SelectBox>
      <S.SelectBox onClick={props.onClickSchedule}>주간일정표</S.SelectBox>
    </S.Body>
  );
}
