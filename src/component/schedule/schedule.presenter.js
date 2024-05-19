import * as S from "./schedule.styles";

export default function ScheduleUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.InputAndButtonWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="monMorning"
              value={props.inputs.monMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="monEvening"
              value={props.inputs.monEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="tueMorning"
              value={props.inputs.tueMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="tueEvening"
              value={props.inputs.tueEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="wedMorning"
              value={props.inputs.wedMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="wedEvening"
              value={props.inputs.wedEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="thuMorning"
              value={props.inputs.thuMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="thuEvening"
              value={props.inputs.thuEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="friMorning"
              value={props.inputs.friMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="friEvening"
              value={props.inputs.friEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="satMorning"
              value={props.inputs.satMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="satEvening"
              value={props.inputs.satEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="sunMorning"
              value={props.inputs.sunMorning}
              onChange={props.onChangeInput}
            />
            <S.Input
              id="sunEvening"
              value={props.inputs.sunEvening}
              onChange={props.onChangeInput}
            />
          </S.DayOfTheWeekWrapper>
        </S.InputAndButtonWrapper>
        <S.InputAndButtonWrapper>
          <S.TestButton onClick={props.buttonClick}>네이버 로그인</S.TestButton>
          <S.TestButton onClick={props.cafeUpload}>
            네이버 카페 업로드
          </S.TestButton>
        </S.InputAndButtonWrapper>
      </S.Wrapper>
      <S.CopyDiv id="copy">
        <S.CopyDivTitleWrapper>
          <S.CopyDivTitle>주간 일정표</S.CopyDivTitle>
          <S.CopyDivDate>24.5.20 ~ 24.5.26</S.CopyDivDate>
        </S.CopyDivTitleWrapper>
        <S.CheckDiv>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Monday</S.ScheduleDay>
            <S.Schedule>{props.inputs.monMorning}</S.Schedule>
            <S.Schedule>{props.inputs.monEvening}</S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Tuesday</S.ScheduleDay>
            <S.Schedule>{props.inputs.tueMorning}</S.Schedule>
            <S.Schedule>{props.inputs.tueEvening}</S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Wednesday</S.ScheduleDay>
            <S.Schedule>{props.inputs.wedMorning}</S.Schedule>
            <S.Schedule>{props.inputs.wedEvening}</S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Thursday</S.ScheduleDay>
            <S.Schedule>{props.inputs.thuMorning}</S.Schedule>
            <S.Schedule>{props.inputs.thuEvening}</S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Friday</S.ScheduleDay>
            <S.Schedule>{props.inputs.friMorning}</S.Schedule>
            <S.Schedule>{props.inputs.friEvening}</S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Saturday</S.ScheduleDay>
            <S.Schedule>{props.inputs.satMorning}</S.Schedule>
            <S.Schedule>{props.inputs.satEvening}</S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Sunday</S.ScheduleDay>
            <S.Schedule>{props.inputs.sunMorning}</S.Schedule>
            <S.Schedule>{props.inputs.sunEvening}</S.Schedule>
          </S.ScheduleWrapper>
        </S.CheckDiv>
      </S.CopyDiv>
    </S.Body>
  );
}
