import * as S from "./styles";

const None = "/none.png";

export default function Schedule2(props) {
  return (
    <S.CopyDiv>
      <S.CopyDivTitleWrapper>
        <S.CopyDivTitle>주간 일정표</S.CopyDivTitle>
        <S.CopyDivDate>{props.date}</S.CopyDivDate>
      </S.CopyDivTitleWrapper>
      <S.BackImageDiv>
        <S.ScheduleWrapper>
          <S.ScheduleDay>MON</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.monMorning.length === 0 ? (
              <S.Img src={None} alt="none" />
            ) : props.inputs.monMorning === "휴방" ||
              props.inputs.monMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.monMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.monEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" width={148} height={148} />
            ) : props.inputs.monEvening === "휴방" ||
              props.inputs.monEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" width={148} height={148} />
            ) : (
              props.inputs.monEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper>
          <S.ScheduleDay>TUE</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.tueMorning.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.tueMorning === "휴방" ||
              props.inputs.tueMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.tueMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.tueEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.tueEvening === "휴방" ||
              props.inputs.tueEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.tueEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper>
          <S.ScheduleDay>WED</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.wedMorning.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.wedMorning === "휴방" ||
              props.inputs.wedMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.wedMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.wedEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.wedEvening === "휴방" ||
              props.inputs.wedEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.wedEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper>
          <S.ScheduleDay>THU</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.thuMorning.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.thuMorning === "휴방" ||
              props.inputs.thuMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.thuMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.thuEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.thuEvening === "휴방" ||
              props.inputs.thuEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.thuEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper>
          <S.ScheduleDay>FRI</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.friMorning.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.friMorning === "휴방" ||
              props.inputs.friMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.friMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.friEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.friEvening === "휴방" ||
              props.inputs.friEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.friEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper>
          <S.ScheduleDay>SAT</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.satMorning.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.satMorning === "휴방" ||
              props.inputs.satMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.satMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.satEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.satEvening === "휴방" ||
              props.inputs.satEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.satEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper>
          <S.ScheduleDay>SUN</S.ScheduleDay>
          <S.Schedule>
            {props.inputs.sunMorning.length === 0 ? (
              <S.Img src="/none.png" alt="none" />
            ) : props.inputs.sunMorning === "휴방" ||
              props.inputs.sunMorning === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.sunMorning
            )}
          </S.Schedule>
          <S.Schedule>
            {props.inputs.sunEvening.length === 0 ? (
              <S.Img src="/none.png" alt="none" width={148} height={148} />
            ) : props.inputs.sunEvening === "휴방" ||
              props.inputs.sunEvening === "휴뱅" ? (
              <S.Img src="/rest.png" alt="none" />
            ) : (
              props.inputs.sunEvening
            )}
          </S.Schedule>
        </S.ScheduleWrapper>
      </S.BackImageDiv>
    </S.CopyDiv>
  );
}
