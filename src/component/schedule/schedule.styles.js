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
  /* justify-content: space-between; */
  gap: 30px;
  background-color: #999;
  padding: 30px;
  border-radius: 30px;
  /* width: 100%; */
  overflow: hidden;
  align-content: flex-start;
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

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
  align-content: flex-start;
  /* width: 100%; */
  gap: 50px;
  /* height: 200px; */
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
  /* position: absolute; */
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
  /* right: 40px;
  top: 90px; */

  :hover {
    background-color: #eee;
    color: #333;
  }
`;

export const CopyDiv = styled.div`
  width: 1600px;
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
  padding: 40px;
  background-image: linear-gradient(-60deg, #8bafdf, #dda5a9);
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
  width: 150px;
  height: 150px;
  top: 15px;
  right: 12px;
  font-size: 19px;
  z-index: 100;
  border-radius: 1px;
  box-shadow: -4px 4px 5px 1px #555500;
  text-align: center;
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
