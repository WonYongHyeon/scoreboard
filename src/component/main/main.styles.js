import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  /* background-color: white; */
  background-image: linear-gradient(to bottom, #effcfe, #c9d5fe);
`;

export const SelectBox = styled.div`
  width: 600px;
  height: 500px;
  font-size: 90px;
  text-align: center;
  line-height: 500px;
  /* border: 3px solid #333; */
  border-radius: 100px;
  cursor: pointer;
  background-color: white;

  :hover {
    color: white;
    background-color: #333;
    border: 0px;
  }
`;
