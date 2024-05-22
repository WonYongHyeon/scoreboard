import styled from "@emotion/styled";
import { forwardRef } from "react";

const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
  <Button className="example-custom-input" onClick={onClick} ref={ref}>
    {value}
  </Button>
));

DatePickerCustomInput.displayName = "DatePickerCustomInput";

export default DatePickerCustomInput;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px 30px;
  font-size: 20px;
  color: #333;
  border: 3px solid #333;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;

  :hover {
    color: #eee;
    background-color: #333;
  }
`;
