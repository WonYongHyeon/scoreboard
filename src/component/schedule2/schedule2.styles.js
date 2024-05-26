import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputAndButtonWrapper = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  overflow: hidden;
  align-content: flex-start;
  flex-direction: row;
  gap: 30px;
  background-color: #999;
  padding: 30px;
  border-radius: 30px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  align-content: flex-start;
  gap: 50px;
  background-color: #999;
  padding: 30px;
  border-radius: 30px;
`;

export const DayOfTheWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ModeWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 3px solid #666;
`;

export const InsertMode = styled.div`
  width: 250px;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px 20px 0 0;

  :hover {
    background-color: #aef;
    color: #333;
  }

  ${(props) =>
    props.mode === "insert"
      ? css`
          background-color: #666;
          color: #eee;
        `
      : css`
          background-color: none;
          color: #eee;
        `}
`;
export const UpdateMode = styled.div`
  width: 250px;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px 20px 0 0;

  :hover {
    background-color: #aef;
    color: #333;
  }

  ${(props) =>
    props.mode === "update"
      ? css`
          background-color: #666;
          color: #eee;
        `
      : css`
          background-color: none;
          color: #eee;
        `}
`;

export const Question = styled.div`
  margin-left: auto;
  padding: 0 30px;
  font-size: 30px;
  margin-top: 50px;
  cursor: pointer;
  color: #eee;

  :hover {
    color: #c00;
  }
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
  font-size: 20px;
  height: 100px;
  border: 3px solid #eee;
  background-color: #555;
  color: #fff;

  :focus {
    outline: 2px solid yellow;
  }
  ::placeholder {
    color: #bbb;
  }
`;

export const Input = styled.textarea`
  width: 200px;
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid #eee;
  height: 50px;
  background-color: #555;
  color: #fff;

  :focus {
    outline: 2px solid yellow;
  }
  ::placeholder {
    color: #bbb;
  }
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 350px;
  padding: 0px 30px;
  margin: auto;
  font-size: 30px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #333;
  color: #eee;

  :hover {
    background-color: #eee;
    color: #333;
  }
`;

export const CopyDiv = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CopyDivTitleWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
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
  width: 100%;
  padding: 20px;
  width: 800px;
  height: 450px;
  /* background-image: linear-gradient(-60deg, #8bafdf, #dda5a9); */
  background-image: url("/back800.png");
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

export const Schedule1 = styled.div`
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

export const Schedule2 = styled.div`
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
  z-index: 100;
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

const FadeIn = keyframes`
  from{
    opacity: 0;
    right: -10px;
  }
  to {
    opacity: 1;
    right: 12px;
  }
`;
const FadeOut = keyframes`
  from{
    opacity: 1;
    right: 12px;
  }
  to {
    opacity: 0;
    right: -10px;
  }
`;

export const NoteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #ffff00;
  transform: rotate(10deg);
  width: 100px;
  height: 100px;
  top: 10px;
  right: 2px;
  font-size: 14px;
  z-index: 100;
  border-radius: 2px;
  box-shadow: -2px 2px 5px 2px #555500;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;

  ${(props) =>
    props.active
      ? css`
          animation: ${FadeIn} 0.5s ease-in forwards;
        `
      : css`
          animation: ${FadeOut} 0.5s ease-out forwards;
        `}
`;
