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

export const ChangeMode = styled.div`
  width: 250px;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
  color: #eee;

  :hover {
    background-color: #aef;
    color: #333;
  }

  ${(props) =>
    props.change
      ? css`
          background-color: #666;
        `
      : css`
          background-color: none;
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

export const NoteDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #ffff00;
  transform: rotate(10deg);
  width: 100px;
  height: 100px;
  top: 10px;
  right: 12px;
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

  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`;

export const NoteDiv1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #ffff00;
  transform: rotate(10deg);
  width: 120px;
  height: 120px;
  top: 10px;
  right: 12px;
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

export const ScheduleTableWrapper = styled.div`
  position: relative;
  width: 42vw;
`;

export const ChangeTable = styled.div`
  width: 250px;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
  color: #eee;

  :hover {
    background-color: #aef;
    color: #333;
  }

  ${(props) =>
    props.change
      ? css`
          background-color: #666;
        `
      : css`
          background-color: none;
        `}
`;
