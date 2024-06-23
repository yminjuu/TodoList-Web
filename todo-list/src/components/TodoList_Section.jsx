import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import React from "react";
import {
  BaseContainer,
  BaseInnerContainer,
  GridLayout,
  ContainerTitle,
} from "../styles/styledComponents";
import { TodoListStateContext } from "../pages/Home";
import { useContext } from "react";

const TodoList_Section = () => {
  const data = useContext(TodoListStateContext);

  return (
    <ListInnerContainer>
      <ContainerTitle>MY TODO LIST</ContainerTitle>
      <TodoListWrapper>
        {/* 실제 db에서 데이터 가져와야 함: TODO LIST */}
        {}
        {data.map((it) => (
          <TodoItem {...it} key={it.id}></TodoItem>
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
