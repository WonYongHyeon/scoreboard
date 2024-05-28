import styled from "@emotion/styled";

export const CopyDiv = styled.div`
  width: 41.6667vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CopyDivTitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
`;

export const CopyDivTitle = styled.p`
  font-size: 30px;
  line-height: 30px;
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
  width: 100%;
  padding: 20px;
  height: 26.0417vw;
  background-image: url("/back.png");
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
