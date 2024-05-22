import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: white;
`;

export const SelectBox = styled.div`
  width: 700px;
  height: 600px;
  font-size: 90px;
  text-align: center;
  line-height: 600px;
  border: 3px solid #333;
  border-radius: 100px;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #c9d5fe;
    border: 0px;
  }
`;
