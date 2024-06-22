import React from "react";
import styled from "styled-components";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import { useState } from "react";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <HeaderWrapper>
      <HeaderBtn onClick={prevMonth}>&lt;</HeaderBtn>{" "}
      <Month>
        {format(currentMonth, "yyyy")}
        {"."}
        {format(currentMonth, "M")}
      </Month>
      <HeaderBtn onClick={nextMonth}>&gt;</HeaderBtn>{" "}
    </HeaderWrapper>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(<Days key={i}>{date[i]}</Days>);
  }
  return <DaysWrapper>{days}</DaysWrapper>;
};

const RenderCells = ({ currentMonth, dateClicked }) => {
  // date-fns의 메서드 사용

  // 현재 월의 시작 날짜 : Jun01
  const monthStart = startOfMonth(currentMonth);
  // 현재 월의 종료 날짜 : Jun30
  const monthEnd = endOfMonth(monthStart);
  // 현재 월의 시작 요일 : AY
  const startDate = startOfWeek(monthStart);
  // 현재 월의 종료 요일
  const endDate = endOfWeek(monthEnd);

  const rows = []; // 각 "week"를 담는 배열
  let days = []; // "week"에 담기는 날짜를 담는 배열
  let day = startDate; // 현재 월의 시작 날짜
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;

      if (isSameMonth(day, monthStart)) {
        days.push(
          <EachDate
            onClick={() => {
              dateClicked(cloneDay);
            }}
            key={day}
          >
            {formattedDate}
          </EachDate>
        );
      } else {
        days.push(
          <NotCurrMonthDate key={day}>{formattedDate}</NotCurrMonthDate>
        );
      }
      day = addDays(day, 1);
    }
    rows.push(<Row key={day}>{days}</Row>); // 일주일을 완성하여 배열에 담음
    days = []; // days 배열 초기화
  }

  if (rows.length === 5) Row.att;

  return <RowWrapper>{rows}</RowWrapper>;
};

const CalendarWrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
`;

const Calendar = ({ dateClicked }) => {
  // 현재 Month와 Date 관리
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // 이전 달 관리
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // 다음 달 관리
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <CalendarWrapper>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells currentMonth={currentMonth} dateClicked={dateClicked} />
    </CalendarWrapper>
  );
};

// Render Header

const HeaderWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: transparent;
  margin: 10px 0px;
`;

const HeaderBtn = styled.button`
  font-size: 20px;
  width: 30px;
  height: 30px;
  border: none;
  font-weight: 700;
  padding: 0;

  background-color: transparent;
  cursor: pointer;
  background: transparent;
`;

const Month = styled.div`
  font-size: 23px;
  font-weight: 700;
  background: transparent;
  font-family: Grandstander;
  width: 120px;
  text-align: center;
  line-height: 30px;
  background: transparent;
`;

// Render Days
const DaysWrapper = styled.div`
  display: flex;
  background: transparent;
  height: 20px;
`;

const Days = styled.div`
  width: calc(100% / 7);
  text-align: center;
  background: transparent;
  font-family: Grandstander;
`;

// Render Cells
const RowWrapper = styled.div`
  background: transparent;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

const NotCurrMonthDate = styled.button`
  font-family: Grandstander;
  background: transparent;
  font-weight: 600;
  text-align: center;
  color: #ababab;
  border: none;
`;

const EachDate = styled.button`
  font-family: Grandstander;
  background: transparent;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background: fixed;
    background-color: rgba(58, 184, 255, 0.5);
    border: 1.5px solid rgba(58, 184, 255, 0.5);
  }

  &:focus {
    border: 1.5px solid rgba(58, 184, 255, 0.5);
    border-radius: 5px;
  }
`;

export default Calendar;
