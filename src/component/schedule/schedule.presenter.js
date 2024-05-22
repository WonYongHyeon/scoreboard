import DatePickerCustomInput from "@/commons/DatePickerCustomInput";
import * as S from "./schedule.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const None = "/none.png";

export default function ScheduleUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.DayOfTheWeekTitle>일정 입력</S.DayOfTheWeekTitle>
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
        <S.InputAndButtonWrapper>
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
              <S.DateDiv>간단메모</S.DateDiv>
              <S.ContentInput
                value={props.memo}
                onChange={props.onChangeMemo}
                placeholder="메모"
              />
            </S.DateInputWrapper>
            <S.UploadButton onClick={props.cafeUpload}>
              네이버 카페 업로드
            </S.UploadButton>
          </S.DateWrapper>
        </S.InputAndButtonWrapper>
      </S.Wrapper>
      <S.CopyDiv id="copy">
        <S.NoteDiv>{props.memo}</S.NoteDiv>
        <S.CopyDivTitleWrapper>
          <S.CopyDivTitle>주간 일정표</S.CopyDivTitle>
          <S.CopyDivDate>
            {/* {props.date.start.length === 0 ? "xx.xx.xx" : props.date.start} ~{" "}
            {props.date.end.length === 0 ? "xx.xx.xx" : props.date.end} */}
            {props.date}
          </S.CopyDivDate>
        </S.CopyDivTitleWrapper>
        <S.CheckDiv>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Monday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.monMorning.length === 0 ? (
                <S.Img
                  src={None}
                  alt="none"
                  // width={148}
                  // height={148}
                />
              ) : props.inputs.monMorning === "휴방" ||
                props.inputs.monMorning === "휴뱅" ? (
                <S.Img src="/rest.png" alt="none" />
              ) : (
                props.inputs.monMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.monEvening.length === 0 ? (
                <S.Img src="/none.png" alt="none" width={148} height={148} />
              ) : props.inputs.monEvening === "휴방" ||
                props.inputs.monEvening === "휴뱅" ? (
                <S.Img src="/rest.png" alt="none" width={148} height={148} />
              ) : (
                props.inputs.monEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Tuesday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.tueMorning.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.tueMorning === "휴방" ||
                props.inputs.tueMorning === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.tueMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.tueEvening.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.tueEvening === "휴방" ||
                props.inputs.tueEvening === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.tueEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Wednesday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.wedMorning.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.wedMorning === "휴방" ||
                props.inputs.wedMorning === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.wedMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.wedEvening.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.wedEvening === "휴방" ||
                props.inputs.wedEvening === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.wedEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Thursday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.thuMorning.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.thuMorning === "휴방" ||
                props.inputs.thuMorning === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.thuMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.thuEvening.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.thuEvening === "휴방" ||
                props.inputs.thuEvening === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.thuEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Friday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.friMorning.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.friMorning === "휴방" ||
                props.inputs.friMorning === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.friMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.friEvening.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.friEvening === "휴방" ||
                props.inputs.friEvening === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.friEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Saturday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.satMorning.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.satMorning === "휴방" ||
                props.inputs.satMorning === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.satMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.satEvening.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.satEvening === "휴방" ||
                props.inputs.satEvening === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.satEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
          <S.ScheduleWrapper>
            <S.ScheduleDay>Sunday</S.ScheduleDay>
            <S.Schedule>
              {props.inputs.sunMorning.length === 0 ? (
                <S.Img
                  src="/none.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : props.inputs.sunMorning === "휴방" ||
                props.inputs.sunMorning === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.sunMorning
              )}
            </S.Schedule>
            <S.Schedule>
              {props.inputs.sunEvening.length === 0 ? (
                <S.Img src="/none.png" alt="none" width={148} height={148} />
              ) : props.inputs.sunEvening === "휴방" ||
                props.inputs.sunEvening === "휴뱅" ? (
                <S.Img
                  src="/rest.png"
                  alt="none"
                  priority
                  width={148}
                  height={148}
                />
              ) : (
                props.inputs.sunEvening
              )}
            </S.Schedule>
          </S.ScheduleWrapper>
        </S.CheckDiv>
      </S.CopyDiv>
    </S.Body>
  );
}
