import DatePickerCustomInput from "@/commons/DatePickerCustomInput";
import * as S from "./schedule.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Schedule1 from "@/commons/ScheduleTable/schedule1/schedule";
import Schedule2 from "@/commons/ScheduleTable/schedule2/schedule";
import Schedule3 from "@/commons/ScheduleTable/schedule3/schedule";

export default function ScheduleUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.ModeWrapper>
          <S.ChangeMode
            change={props.mode === "insert"}
            onClick={() => props.onClickMode("insert")}
          >
            일정 입력
          </S.ChangeMode>
          <S.ChangeMode
            change={props.mode === "update"}
            onClick={() => props.onClickMode("update")}
          >
            일정 수정
          </S.ChangeMode>
          <S.Question onClick={props.onClickQuestion}>도움말</S.Question>
        </S.ModeWrapper>
        <S.InputAndButtonWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="monMorning"
              value={props.inputs.monMorning}
              onChange={props.onChangeInput}
              placeholder="월 오전"
            />
            <S.Input
              id="monEvening"
              value={props.inputs.monEvening}
              onChange={props.onChangeInput}
              placeholder="월 오후"
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="tueMorning"
              value={props.inputs.tueMorning}
              onChange={props.onChangeInput}
              placeholder="화 오전"
            />
            <S.Input
              id="tueEvening"
              value={props.inputs.tueEvening}
              onChange={props.onChangeInput}
              placeholder="화 오후"
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="wedMorning"
              value={props.inputs.wedMorning}
              onChange={props.onChangeInput}
              placeholder="수 오전"
            />
            <S.Input
              id="wedEvening"
              value={props.inputs.wedEvening}
              onChange={props.onChangeInput}
              placeholder="수 오후"
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="thuMorning"
              value={props.inputs.thuMorning}
              onChange={props.onChangeInput}
              placeholder="목 오전"
            />
            <S.Input
              id="thuEvening"
              value={props.inputs.thuEvening}
              onChange={props.onChangeInput}
              placeholder="목 오후"
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="friMorning"
              value={props.inputs.friMorning}
              onChange={props.onChangeInput}
              placeholder="금 오전"
            />
            <S.Input
              id="friEvening"
              value={props.inputs.friEvening}
              onChange={props.onChangeInput}
              placeholder="금 오후"
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="satMorning"
              value={props.inputs.satMorning}
              onChange={props.onChangeInput}
              placeholder="토 오전"
            />
            <S.Input
              id="satEvening"
              value={props.inputs.satEvening}
              onChange={props.onChangeInput}
              placeholder="토 오후"
            />
          </S.DayOfTheWeekWrapper>
          <S.DayOfTheWeekWrapper>
            <S.Input
              id="sunMorning"
              value={props.inputs.sunMorning}
              onChange={props.onChangeInput}
              placeholder="일 오전"
            />
            <S.Input
              id="sunEvening"
              value={props.inputs.sunEvening}
              onChange={props.onChangeInput}
              placeholder="일 오후"
            />
          </S.DayOfTheWeekWrapper>
        </S.InputAndButtonWrapper>
        <S.DateWrapper>
          <S.DateInputWrapper>
            <S.DateDiv>시작일</S.DateDiv>
            <DatePicker
              selected={props.startDate}
              onChange={(date) => props.changeDate(date)}
              shouldCloseOnSelect
              dateFormat="YY.MM.dd"
              style={{ width: "200px" }}
              customInput={<DatePickerCustomInput />}
            />
          </S.DateInputWrapper>
          <S.DateInputWrapper>
            <S.DateDiv>메모</S.DateDiv>
            <S.ContentInput
              value={props.memo}
              onChange={props.onChangeMemo}
              placeholder="간단한 메모"
            />
          </S.DateInputWrapper>
          <S.DateInputWrapper>
            <S.DateDiv>본문 내용</S.DateDiv>
            <S.ContentInput
              value={props.content}
              onChange={props.onChangeContent}
              placeholder="본문 내용"
            />
          </S.DateInputWrapper>
          <S.UploadButton onClick={props.cafeUpload}>
            {props.mode === "insert"
              ? "주간일정표 업로드"
              : "주간일정표 수정본 업로드"}
          </S.UploadButton>
        </S.DateWrapper>
      </S.Wrapper>
      <S.ModeWrapper>
        <S.ChangeTable
          change={props.copy === "copy1"}
          onClick={() => props.onClickScheduleTable("copy1")}
        >
          1번
        </S.ChangeTable>
        <S.ChangeTable
          change={props.copy === "copy2"}
          onClick={() => props.onClickScheduleTable("copy2")}
        >
          2번
        </S.ChangeTable>
        <S.ChangeTable
          change={props.copy === "copy3"}
          onClick={() => props.onClickScheduleTable("copy3")}
        >
          3번
        </S.ChangeTable>
      </S.ModeWrapper>
      <S.ScheduleTableWrapper id="copy">
        {props.copy === "copy1" && (
          <div id="copy1">
            {props.memoStart && (
              <S.NoteDiv1 active={props.memoActive}>{props.memo}</S.NoteDiv1>
            )}
            <Schedule1 date={props.date} inputs={props.inputs}></Schedule1>
          </div>
        )}
        {props.copy === "copy2" && (
          <div id="copy2">
            {props.memoStart && (
              <S.NoteDiv2 active={props.memoActive}>{props.memo}</S.NoteDiv2>
            )}
            <Schedule2 date={props.date} inputs={props.inputs}></Schedule2>
          </div>
        )}
        {props.copy === "copy3" && (
          <div id="copy3">
            {props.memoStart && (
              <S.NoteDiv2 active={props.memoActive}>{props.memo}</S.NoteDiv2>
            )}
            <Schedule3 date={props.date} inputs={props.inputs}></Schedule3>
          </div>
        )}
      </S.ScheduleTableWrapper>
    </S.Body>
  );
}
