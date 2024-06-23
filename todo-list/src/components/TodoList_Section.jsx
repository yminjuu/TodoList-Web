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
  const onEdit = useContext(TodoListDispatchContext).onEdit;
  const selectedDate = useContext(SelectedDateContext);

  console.log(selectedDate);

  const onEditButton = ({ todo_id }) => {
    setEditContent({ todo_id });
  };

  // const handleCheck = ({ todo_id }) => {
  //   onEdit;
  // };

  const getProcessedTodoList = () => {
    // 선택된 날짜에 맞는 TODO를 반환함
    const dateClickCallback = (item) => {
      return isSameDay(item.date, selectedDate);
    };

    const compare = (a, b) => {
      // 시간이 가까운 순으로 나열
      return parseInt(b.date) - parseInt(a.date);
    };
    const copyList = JSON.parse(JSON.stringify(data));
    //깊은 복사를 하는 이유: 원본 배열을 훼손시키지 않기 위해서

    const filteredList = copyList.filter((it) => dateClickCallback(it)); //직접 만든 필터링 함수를 전달: return true일 때에만 배열에 할당됨
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
