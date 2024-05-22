import styled from "@emotion/styled";

export const Body = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-image: linear-gradient(to bottom, #effcfe, #c9d5fe);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const DayOfTheWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DayOfTheWeekTitle = styled.div`
  font-size: 40px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  height: 200px;
`;
export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DateDiv = styled.div`
  font-size: 30px;
  padding: 10px;
`;
export const DateInput = styled.input`
  width: 200px;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  border: 3px solid #333;
`;

export const ContentInput = styled.textarea`
  width: 300px;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 15px;
  height: 100px;
  border: 3px solid #333;
`;

export const Input = styled.textarea`
  width: 200px;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 3px solid #333;
  height: 50px;
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-left: 100px;
  height: 100px;
  width: 300px;
  font-size: 30px;
  cursor: pointer;
  border: 3px solid #333;
  border-radius: 20px;
  background-color: #eee;
  color: #333;

  :hover {
    background-color: #333;
    color: #eee;
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
  position: relative;
  /* padding: 50px; */
`;

export const CopyDivTitleWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
`;

export const CopyDivTitle = styled.p`
  font-size: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: white;
`;

export const CopyDivDate = styled.div`
  display: flex;
  align-items: end;
  font-size: 25px;
  text-align: end;
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
  font-weight: 300;
`;

export const Schedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 174px;
  height: 174px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  font-size: 28px;
  text-align: center;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
`;

export const Img = styled.img`
  width: 148px;
  height: 148px;
`;

export const NoteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #ffff00;
  transform: rotate(10deg);
  width: 150px;
  height: 150px;
  top: 15px;
  right: 14px;
  z-index: 100;
  border-radius: 1px;
  box-shadow: -5px 5px 10px 2px #555500;
  text-align: center;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
`;
