import styled from "@emotion/styled";

export default function Schedule1(props) {
  return (
    <CopyDiv>
      <CopyDivTitleWrapper>
        <CopyDivTitle>주간 일정표</CopyDivTitle>
        <CopyDivDate>{props.date}</CopyDivDate>
      </CopyDivTitleWrapper>
      <BackImageDiv>
        <ScheduleWrapper>
          <DayWrapper>
            <ScheduleDay>월</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.monMorning === "휴뱅") |
              (props.inputs.monMorning === "휴방")
                ? "zzZ"
                : props.inputs.monMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.monEvening === "휴뱅") |
              (props.inputs.monEvening === "휴방")
                ? "zzZ"
                : props.inputs.monEvening}
            </ScheduleEve>
          </DayWrapper>
          <DayWrapper>
            <ScheduleDay>화</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.tueMorning === "휴뱅") |
              (props.inputs.tueMorning === "휴방")
                ? "zzZ"
                : props.inputs.tueMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.tueEvening === "휴뱅") |
              (props.inputs.tueEvening === "휴방")
                ? "zzZ"
                : props.inputs.tueEvening}
            </ScheduleEve>
          </DayWrapper>
          <DayWrapper>
            <ScheduleDay>수</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.wedMorning === "휴뱅") |
              (props.inputs.wedMorning === "휴방")
                ? "zzZ"
                : props.inputs.wedMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.wedEvening === "휴뱅") |
              (props.inputs.wedEvening === "휴방")
                ? "zzZ"
                : props.inputs.wedEvening}
            </ScheduleEve>
          </DayWrapper>
          <DayWrapper>
            <ScheduleDay>목</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.thuMorning === "휴뱅") |
              (props.inputs.thuMorning === "휴방")
                ? "zzZ"
                : props.inputs.thuMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.thuEvening === "휴뱅") |
              (props.inputs.thuEvening === "휴방")
                ? "zzZ"
                : props.inputs.thuEvening}
            </ScheduleEve>
          </DayWrapper>
          <DayWrapper>
            <ScheduleDay>금</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.friMorning === "휴뱅") |
              (props.inputs.friMorning === "휴방")
                ? "zzZ"
                : props.inputs.friMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.friEvening === "휴뱅") |
              (props.inputs.friEvening === "휴방")
                ? "zzZ"
                : props.inputs.friEvening}
            </ScheduleEve>
          </DayWrapper>
          <DayWrapper>
            <ScheduleDay>토</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.satMorning === "휴뱅") |
              (props.inputs.satMorning === "휴방")
                ? "zzZ"
                : props.inputs.satMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.satEvening === "휴뱅") |
              (props.inputs.satEvening === "휴방")
                ? "zzZ"
                : props.inputs.satEvening}
            </ScheduleEve>
          </DayWrapper>
          <DayWrapper>
            <ScheduleDay>일</ScheduleDay>
            <ScheduleMor>
              {(props.inputs.sunMorning === "휴뱅") |
              (props.inputs.sunMorning === "휴방")
                ? "zzZ"
                : props.inputs.sunMorning}
            </ScheduleMor>
            <ScheduleEve>
              {(props.inputs.sunEvening === "휴뱅") |
              (props.inputs.sunEvening === "휴방")
                ? "zzZ"
                : props.inputs.sunEvening}
            </ScheduleEve>
          </DayWrapper>
        </ScheduleWrapper>
      </BackImageDiv>
    </CopyDiv>
  );
}

export const CopyDiv = styled.div`
  width: 42vw;
  /* height: 495px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CopyDivTitleWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 42vw;
  padding: 10px;
  background-color: #333;
  color: white;
`;

export const CopyDivTitle = styled.p`
  font-size: 25px;
  line-height: 25px;
  padding-left: 10px;
  color: white;
`;

export const CopyDivDate = styled.div`
  display: flex;
  align-items: end;
  font-size: 15px;
  text-align: end;
  color: white;
`;

export const BackImageDiv = styled.div`
  width: 42vw;
  padding: 20px;
  height: 450px;
  /* background-image: linear-gradient(-60deg, #8bafdf, #dda5a9); */
  background-image: url("/back800.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const DayWrapper = styled.div`
  display: flex;
  position: relative;
  height: 45px;
`;

export const ScheduleMor = styled.div`
  position: absolute;
  width: 180px;
  height: 30px;
  text-align: center;
  left: 70px;
  line-height: 30px;
  font-size: 20px;
  background-image: linear-gradient(to right, #8bafdf, #d6dff8);
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 50%),
    calc(100% - 30px) 100%,
    10px 100%,
    0 calc(100% - 10px),
    0 10px
  );
  border: 0px;
`;

export const ScheduleEve = styled.div`
  position: absolute;
  left: 220px;
  top: 15px;
  width: 180px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  background-image: linear-gradient(to left, #dda5a9, #d6dff8);
  clip-path: polygon(
    30px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px),
    0 calc(100% - 50%)
  );
  border: 0px;
`;

export const ScheduleDay = styled.div`
  position: absolute;
  /* z-index: 100; */
  font-size: 19px;
  width: 45px;
  height: 45px;
  background-color: #d6dff8;
  line-height: 45px;
  text-align: center;
  background-image: linear-gradient(to right, #d6dff8, #fff);

  clip-path: polygon(
    22.5px 0,
    calc(100% - 22.5px) 0,
    100% 22.5px,
    100% calc(100% - 22.5px),
    calc(100% - 22.5px) 100%,
    22.5px 100%,
    0 calc(100% - 22.5px),
    0 22.5px
  );
`;
