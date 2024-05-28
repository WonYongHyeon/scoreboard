import styled from "@emotion/styled";

export const CopyDiv = styled.div`
  width: 42vw;
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
  height: 18vw;
  padding: 20px;
  background-image: linear-gradient(-60deg, #8bafdf, #dda5a9);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ScheduleWrapper = styled.div`
  width: 6vw;
  /* height: 300px; */
  border: 3px solid black;
  border-radius: 10px;
  /* padding: 15px 10px; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px 0px 8px 0px;
`;

export const ScheduleDay = styled.div`
  font-size: 15px;
  width: 100%;
  text-align: center;
  font-weight: 400;
`;

export const Schedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 6vw;
  padding: 2px;
  font-size: 1.2vw;
  text-align: center;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
`;

export const Img = styled.img`
  width: 4.5vw;
  height: 4.5vw;
`;
