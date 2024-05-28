import * as S from "./styles";

export default function Schedule1(props) {
  return (
    <S.CopyDiv>
      <S.CopyDivTitleWrapper>
        <S.CopyDivTitle>주간 일정표</S.CopyDivTitle>
        <S.CopyDivDate>{props.date}</S.CopyDivDate>
      </S.CopyDivTitleWrapper>
      <S.BackImageDiv>
        <S.ScheduleWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>월</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.monMorning === "휴뱅") |
              (props.inputs.monMorning === "휴방")
                ? "zzZ"
                : props.inputs.monMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.monEvening === "휴뱅") |
              (props.inputs.monEvening === "휴방")
                ? "zzZ"
                : props.inputs.monEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>화</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.tueMorning === "휴뱅") |
              (props.inputs.tueMorning === "휴방")
                ? "zzZ"
                : props.inputs.tueMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.tueEvening === "휴뱅") |
              (props.inputs.tueEvening === "휴방")
                ? "zzZ"
                : props.inputs.tueEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>수</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.wedMorning === "휴뱅") |
              (props.inputs.wedMorning === "휴방")
                ? "zzZ"
                : props.inputs.wedMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.wedEvening === "휴뱅") |
              (props.inputs.wedEvening === "휴방")
                ? "zzZ"
                : props.inputs.wedEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>목</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.thuMorning === "휴뱅") |
              (props.inputs.thuMorning === "휴방")
                ? "zzZ"
                : props.inputs.thuMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.thuEvening === "휴뱅") |
              (props.inputs.thuEvening === "휴방")
                ? "zzZ"
                : props.inputs.thuEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>금</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.friMorning === "휴뱅") |
              (props.inputs.friMorning === "휴방")
                ? "zzZ"
                : props.inputs.friMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.friEvening === "휴뱅") |
              (props.inputs.friEvening === "휴방")
                ? "zzZ"
                : props.inputs.friEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>토</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.satMorning === "휴뱅") |
              (props.inputs.satMorning === "휴방")
                ? "zzZ"
                : props.inputs.satMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.satEvening === "휴뱅") |
              (props.inputs.satEvening === "휴방")
                ? "zzZ"
                : props.inputs.satEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
          <S.DayWrapper>
            <S.ScheduleDay>일</S.ScheduleDay>
            <S.ScheduleMor>
              {(props.inputs.sunMorning === "휴뱅") |
              (props.inputs.sunMorning === "휴방")
                ? "zzZ"
                : props.inputs.sunMorning}
            </S.ScheduleMor>
            <S.ScheduleEve>
              {(props.inputs.sunEvening === "휴뱅") |
              (props.inputs.sunEvening === "휴방")
                ? "zzZ"
                : props.inputs.sunEvening}
            </S.ScheduleEve>
          </S.DayWrapper>
        </S.ScheduleWrapper>
      </S.BackImageDiv>
    </S.CopyDiv>
  );
}
