import DatePickerCustomInput from "@/commons/DatePickerCustomInput";
import * as S from "./schedule2.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const None = "/none.png";

export default function Schedule2UI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.ModeWrapper>
          <S.InsertMode
            mode={props.mode}
            onClick={() => props.onClickMode("insert")}
          >
            일정 입력
          </S.InsertMode>
          <S.UpdateMode
            mode={props.mode}
            onClick={() => props.onClickMode("update")}
          >
            일정 수정
          </S.UpdateMode>
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
      <S.CopyDiv id="copy">
        {props.memoStart && (
          <S.NoteDiv active={props.memoActive}>{props.memo}</S.NoteDiv>
        )}
        <S.CopyDivTitleWrapper>
          <S.CopyDivTitle>주간 일정표</S.CopyDivTitle>
          <S.CopyDivDate>{props.date}</S.CopyDivDate>
        </S.CopyDivTitleWrapper>
        <S.BackImageDiv>
          <S.ScheduleWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>월</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.monMorning === "휴뱅") |
                (props.inputs.monMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.monMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.monEvening === "휴뱅") |
                (props.inputs.monEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.monEvening}
              </S.Schedule2>
            </S.DayWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>화</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.tueMorning === "휴뱅") |
                (props.inputs.tueMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.tueMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.tueEvening === "휴뱅") |
                (props.inputs.tueEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.tueEvening}
              </S.Schedule2>
            </S.DayWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>수</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.wedMorning === "휴뱅") |
                (props.inputs.wedMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.wedMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.wedEvening === "휴뱅") |
                (props.inputs.wedEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.wedEvening}
              </S.Schedule2>
            </S.DayWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>목</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.thuMorning === "휴뱅") |
                (props.inputs.thuMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.thuMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.thuEvening === "휴뱅") |
                (props.inputs.thuEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.thuEvening}
              </S.Schedule2>
            </S.DayWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>금</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.friMorning === "휴뱅") |
                (props.inputs.friMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.friMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.friEvening === "휴뱅") |
                (props.inputs.friEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.friEvening}
              </S.Schedule2>
            </S.DayWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>토</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.satMorning === "휴뱅") |
                (props.inputs.satMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.satMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.satEvening === "휴뱅") |
                (props.inputs.satEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.satEvening}
              </S.Schedule2>
            </S.DayWrapper>
            <S.DayWrapper>
              <S.ScheduleDay>일</S.ScheduleDay>
              <S.Schedule1>
                {(props.inputs.sunMorning === "휴뱅") |
                (props.inputs.sunMorning === "휴방")
                  ? "zzZ"
                  : props.inputs.sunMorning}
              </S.Schedule1>
              <S.Schedule2>
                {(props.inputs.sunEvening === "휴뱅") |
                (props.inputs.sunEvening === "휴방")
                  ? "zzZ"
                  : props.inputs.sunEvening}
              </S.Schedule2>
            </S.DayWrapper>
          </S.ScheduleWrapper>
        </S.BackImageDiv>
      </S.CopyDiv>
    </S.Body>
  );
}
