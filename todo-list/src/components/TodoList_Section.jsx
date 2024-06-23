import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import React from "react";
import {
  BaseContainer,
  BaseInnerContainer,
  GridLayout,
  ContainerTitle,
} from "../styles/styledComponents";
import {
  SelectedDateContext,
  TodoListDispatchContext,
  TodoListStateContext,
} from "../pages/Home";
import { useContext, useState } from "react";
import { isSameDay } from "date-fns";
import InputEmoji from "react-input-emoji";

const TodoList_Section = ({ setEditContent }) => {
  const data = useContext(TodoListStateContext);
  const selectedDate = useContext(SelectedDateContext);

  // 수정 버튼을 눌렀을 때 알맞게 처리
  const onEditButton = ({ todo_id }) => {
    setEditContent({ todo_id });
  };

  // 선택된 날짜에 맞는 TODO를 반환함
  const getProcessedTodoList = () => {
    const dateClickCallback = (item) => {
      return isSameDay(item.date, selectedDate);
    };

    const compare = (a, b) => {
      // 시간이 가까운 순으로 나열
      return parseInt(b.date) - parseInt(a.date);
    };
    // 원본 배열을 복사하여 깊은 복사
    const copyList = JSON.parse(JSON.stringify(data));

    const filteredList = copyList.filter((it) => dateClickCallback(it)); //직접 만든 필터링 함수를 전달: 알맞은 날짜 데이터만 가져옴
    const sortedList = filteredList.sort(compare); //sort메서드에 직접 만든 비교함수를 전달한다.
    return sortedList;
  };

  return (
    <ListInnerContainer>
      <ContainerTitle>MY TODO LIST</ContainerTitle>
      <TodoListWrapper>
        {getProcessedTodoList().map((it) => (
          <TodoItem
            {...it}
            key={it.todo_id}
            onEditButton={onEditButton}
          ></TodoItem>
        ))}
      </TodoListWrapper>
    </ListInnerContainer>
  );
};

export default TodoList_Section;

const ListInnerContainer = styled(BaseInnerContainer)`
  width: 1047px;
  height: 249px;
  flex-shrink: 0;
`;

const TodoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px 0px 1px 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: transparent;
`;
