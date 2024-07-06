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
  TodoLeftContext,
  TodoListDispatchContext,
  TodoListStateContext,
} from "../pages/Home";
import { useContext, useState } from "react";
import { isSameDay } from "date-fns";
import InputEmoji from "react-input-emoji";
import { useEffect } from "react";

const TodoList_Section = ({ setEditContent }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const data = useContext(TodoListStateContext);
  const selectedDate = useContext(SelectedDateContext);
  const getFilteredData = useContext(TodoListDispatchContext).getFilteredData;
  // const todoLeft = useContext(TodoLeftContext).todoLeft;

  const toggleFilterToggle = useContext(
    TodoListDispatchContext
  ).toggleFilterToggle;

  // filter가 클릭됐는지 확인
  const [filterOn, toggleFilterOn] = useState(false);

  // 선택된 날짜에 대해 todo가 남음
  const [todoLeft, toggleTodoLeft] = useState(false);

  useEffect(() => {}, [todoLeft]);

  // 수정 버튼을 눌렀을 때 알맞게 처리
  const onEditButton = ({ todo_id }) => {
    setEditContent({ todo_id });
  };

  // 선택된 날짜에 맞는 TODO를 반환함
  const getProcessedTodoList = () => {
    if (!filterOn) {
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
    } else {
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
    }
  };

  return (
    <ListInnerContainer>
      <TitleWrapper>
        <StyledContainerTitle>MY TODO LIST</StyledContainerTitle>
        {filterOn ? (
          <FilterTrueButton
            filterOn={filterOn}
            onClick={() => {
              toggleFilterToggle();
              toggleFilterOn(!filterOn);
            }}
          >
            가나다순 정렬
          </FilterTrueButton>
        ) : (
          <FilterButton
            filterOn={filterOn}
            onClick={() => {
              toggleFilterToggle();
              toggleFilterOn(!filterOn);
            }}
          >
            가나다순 정렬
          </FilterButton>
        )}
        {/* {todoLeft ? (
          <todoLeftText>남은 할 일이 있어요!</todoLeftText>
        ) : (
          <todoLeftText>남은 할 일이 없어요!</todoLeftText>
        )} */}
      </TitleWrapper>
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
  display: flex;
`;

const TodoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px 0px 1px 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: transparent;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 40px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: start;
`;

const StyledContainerTitle = styled(ContainerTitle)`
  width: 180px;
`;

const FilterButton = styled.button`
  width: 100px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px;
`;

const FilterTrueButton = styled.button`
  width: 100px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  border: 2px solid #63c3ff;
  border-radius: 5px;
  margin: 5px;
  color: #63c3ff;
`;

const todoLeftText = styled.div`
  width: 100px;
  height: 30px;
  background: transparent;
`;
