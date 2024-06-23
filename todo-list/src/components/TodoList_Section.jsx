import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import React from "react";
import {
  BaseContainer,
  BaseInnerContainer,
  GridLayout,
  ContainerTitle,
} from "../styles/styledComponents";

// 필요한 props: TODO LIST전체
const TodoList_Section = () => {
  return (
    <ListInnerContainer>
      <ContainerTitle>MY TODO LIST</ContainerTitle>
      <TodoListWrapper>
        {/* 실제 db에서 데이터 가져와야 함: TODO LIST */}
        {}
        <TodoItem
          id={0}
          isChecked={true}
          content={"할 일 1"}
          emoticon={"none"}
        ></TodoItem>
        <TodoItem
          id={0}
          isChecked={true}
          content={"할 일 2"}
          emoticon={"none"}
        ></TodoItem>
        <TodoItem
          id={0}
          isChecked={true}
          content={"할 일 3"}
          emoticon={"none"}
        ></TodoItem>
        <TodoItem
          id={0}
          isChecked={true}
          content={"할 일 4"}
          emoticon={"none"}
        ></TodoItem>
        <TodoItem
          id={0}
          isChecked={true}
          content={"할 일 5"}
          emoticon={"none"}
        ></TodoItem>
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
