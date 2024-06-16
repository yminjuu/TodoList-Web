import React from "react";
import styled from "styled-components";

const Calendar = () => {
  const CalendarWrapper = styled.div`
    background: transparent;
    width: 100%;
    height: 100%;
  `;

  const HeaderWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: transparent;
    margin-top: 10px;
  `;

  const DaysWrapper = styled.div`
    display: flex;
    background: transparent;
  `;

  const Days = styled.div`
    width: calc(100% / 7);
    text-align: center;
    background: transparent;
  `;

  const Dates = styled.div`
    display: flex;
    flex-flow: row wrap;
    /* height: 500px; */
    background: transparent;
  `;

  const Date = styled.div`
    width: calc(100% / 7);
    text-align: center;
    background: transparent;
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
    width: 50px;
    text-align: center;
    line-height: 30px;
    background: transparent;
  `;

  return (
    <CalendarWrapper>
      <HeaderWrapper>
        <HeaderBtn>&lt;</HeaderBtn>
        <Month>July</Month>
        <HeaderBtn>&gt;</HeaderBtn>
      </HeaderWrapper>
      <DaysWrapper>
        <Days>Sun</Days>
        <Days>Mon</Days>
        <Days>Tue</Days>
        <Days>Wed</Days>
        <Days>Thr</Days>
        <Days>Fri</Days>
        <Days>Sat</Days>
      </DaysWrapper>
      <Dates></Dates>
    </CalendarWrapper>
  );
};

export default Calendar;
