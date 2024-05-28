import styled from "@emotion/styled";

export const CopyDiv = styled.div`
  width: 41.6667vw;
  /* width: 700px; */
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
  padding: 30px 40px;
  background-image: linear-gradient(-60deg, #8bafdf, #d6dff8, #dda5a9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const ScheduleDay = styled.div`
  font-size: 40px;
  width: 15%;
  line-height: 100px;
  text-align: center;
  background-image: linear-gradient(to right, #d6dff8, #fff);

  clip-path: polygon(
    100% 0%,
    calc(100% - 20px) 50%,
    100% 100%,
    20px 100%,
    0% 50%,
    20px 0%
  );
`;

export const ScheduleMorEveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`;

export const ScheduleMor = styled.div`
  width: 50%;
  height: 100px;
  /* line-height: 80px; */
  font-size: 25px;
  background-image: linear-gradient(to right, #8bafdf, #fff);
  border: 0px;
  padding: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;

  clip-path: polygon(
    100% 0%,
    calc(100% - 20px) 50%,
    100% 100%,
    20px 100%,
    0% 50%,
    20px 0%
  );
`;

export const ScheduleEve = styled.div`
  width: 50%;
  height: 100px;
  /* line-height: 80px; */
  font-size: 25px;
  background-image: linear-gradient(to right, #fff, #dda5a9);
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;

  clip-path: polygon(
    100% 0%,
    calc(100% - 20px) 50%,
    100% 100%,
    20px 100%,
    0% 50%,
    20px 0%
  );
`;
