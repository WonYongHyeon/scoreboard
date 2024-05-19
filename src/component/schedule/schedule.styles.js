import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  height: 1300px;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  padding: 50px;
  background-color: #c9d5fe;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const InputAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DayOfTheWeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  font-size: 25px;
`;

export const TestButton = styled.div`
  /* width: 500px; */
  font-size: 30px;
  cursor: pointer;
  padding: 50px;

  :hover {
    scale: 1.2;
  }
`;

export const CopyDiv = styled.div`
  width: 1600px;
  /* height: 600px; */
  /* background-color: #99f; */
  /* border-radius: 60px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 50px; */
`;

export const CopyDivTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
`;

export const CopyDivTitle = styled.p`
  font-size: 40px;
  padding-left: 10px;
  color: white;
`;

export const CopyDivDate = styled.p`
  font-size: 20px;
  padding-right: 10px;
  line-height: 44px;
  color: white;
`;

export const CheckDiv = styled.div`
  width: 100%;
  /* height: 700px; */
  padding: 40px;
  background: linear-gradient(to bottom, transparent 38px, #ddd 38px) 0 0 /
      100vw 40px repeat-y,
    linear-gradient(to right, transparent 38px, #ddd 38px) 0 0 / 40px 100vh
      repeat-x white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const WeekWrapper = styled.div``;

export const ScheduleWrapper = styled.div`
  width: 200px;
  height: 500px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ScheduleDay = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: center;
`;

export const Schedule = styled.div`
  width: 100%;
  height: 200px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  font-size: 30px;
`;
