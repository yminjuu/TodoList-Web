import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import TodoList_Section from "../components/TodoList_Section";
import AddTodo_Section from "../components/AddTodo_Section";
import axios from "axios";

import {
  BaseContainer,
  BaseInnerContainer,
  GridLayout,
} from "../styles/styledComponents";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

// Home에서 GET을 통해 모든 TODO 데이터를 불러오고, id에 따라 알맞게 데이터를 가져옴

const reducer = (state, action) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "FILTERED": {
    }
    case "REMOVE": {
      try {
        axios
          .delete(
            `${BASE_URL}/api/todos/${action.data.userId}/${action.data.targetId}`
          )
          .then((res) => {
            console.log("삭제", res);
          });
      } catch (error) {
        console.log(error);
      }
      newState = state.filter(
        (it) => String(it.todo_id) !== String(action.data.targetId)
      );
      break;
    }
    case "CREATE": {
      const newItem = { ...action.data };
      newState = [newItem, ...state];
      try {
        axios
          .post(`${BASE_URL}/api/todos/${action.data.userId}`, {
            date: action.data.date,
            content: action.data.content,
          })
          .then((res) => {
            console.log("투두 작성 ", res);
          });
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case "EDIT": {
      try {
        axios
          .patch(
            `${BASE_URL}/api/todos/${action.data.userId}/${action.data.targetId}`,
            {
              date: action.data.date,
              content: action.data.content,
            }
          )
          .then((res) => {
            console.log("수정", res);
          });
      } catch (error) {
        console.log(error);
      }
      newState = state.map((it) =>
        it.todo_id === action.data.targetId ? { ...action.data } : it
      );
      break;
    }
    case "CHECK": {
      try {
        axios
          .patch(
            `${BASE_URL}/api/todos/${action.data.userId}/${action.data.targetId}/check`,
            {
              is_checked: action.data.is_checked,
            }
          )
          .then((res) => {
            newState = state.map((it) =>
              it.todo_id === action.data.targetId
                ? { ...action.data, is_checked: res.data.is_checked }
                : it
            );
          });
        break;
      } catch (error) {
        console.log(error);
      }
    }
    default:
      return state;
  }
  return newState;
};

export const TodoListStateContext = React.createContext();
export const TodoListDispatchContext = React.createContext();
export const SelectedDateContext = React.createContext();
export const TodoLeftContext = React.createContext();

const Home = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // todoData 전체 관리
  const [todoData, dispatch] = useReducer(reducer, []);

  // edit을 누른 data의 id 관리
  const [editDataId, setEditDataId] = useState("");
  const [isEdit, toggleIsEdit] = useState(false);

  // Calendar에서 현재 선택된 날짜 관리
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();

  // filter 버튼이 눌렸는지 관리
  const [filterOn, toggleFilterOn] = useState(false);

  // selectedDate에 대해 남은 todo 개수 관리
  const [todoLeft, setTodoLeft] = useState(0);

  useEffect(() => {
    if (!filterOn) getData(); //API로 데이터 가져오기
    else getFilteredData(); //가나다순 정렬된 데이터 가져오기
    todoLeftGet();
  }, [selectedDate, filterOn]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/todos/${id}?month=${
          selectedDate.getMonth() + 1
        }&day=${selectedDate.getDate()}`
      );
      dispatch({
        type: "INIT",
        data,
      });
      console.log("받아온 필터링되지 않은 데이터", data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredData = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/todos/${id}?month=${
          selectedDate.getMonth() + 1
        }&day=${selectedDate.getDate()}&sort=asc`
      );
      dispatch({
        type: "INIT",
        data,
      });
      console.log("받아온 필터링된 데이터", data);
    } catch (error) {
      console.log(error);
    }
  };

  const todoLeftGet = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/todos/${id}/remains?month=${
          selectedDate.getMonth() + 1
        }&day=${selectedDate.getDate()}`
      );
      const leftData = response.data.count;
      setTodoLeft(leftData);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFilterToggle = () => {
    toggleFilterOn(!filterOn);
  };

  //data state 관리 method
  const onCreate = ({ date, content }) => {
    dispatch({
      type: "CREATE",
      data: {
        userId: id,
        date: date,
        content: content,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      data: { userId: id, targetId },
    });
  };

  const onEdit = ({ targetId, date, content, is_checked, emoji }) => {
    dispatch({
      type: "EDIT",
      data: {
        userId: id,
        targetId,
        date,
        content,
        is_checked,
        emoji,
      },
    });
    toggleIsEdit(false);
    setEditDataId("");
  };

  const onCheck = (targetId, is_checked) => {
    dispatch({
      type: "CHECK",
      data: {
        userId: id,
        targetId,
        is_checked,
      },
    });
  };

  const onEmojiAdd = (targetId, emoji) => {
    dispatch({
      type: "CHECK",
      data: {
        id,
        targetId,
        emoji,
      },
    });
  };

  const setEditContent = ({ todo_id }) => {
    setEditDataId(todo_id);
    toggleIsEdit(true);
  };

  // Calendar에서 클릭된 날짜 관리
  const dateClicked = (day) => {
    setSelectedDate(day);
  };

  return (
    <TodoListStateContext.Provider value={todoData}>
      <TodoListDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
          onEdit,
          onCheck,
          onEmojiAdd,
          getFilteredData,
          toggleFilterToggle,
        }}
      >
        <SelectedDateContext.Provider value={selectedDate}>
          <div>
            <LogoWrapper>
              <Logo src="../public/logo/logo.png" alt="logo"></Logo>
            </LogoWrapper>
            <ContentWrapper>
              <GridLayout>
                <CalendarContainer>
                  <CalendarInnerContainer>
                    <Calendar dateClicked={dateClicked}></Calendar>
                  </CalendarInnerContainer>
                </CalendarContainer>
                <TODOContainer>
                  <AddTodo_Section
                    isEdit={isEdit}
                    editDataId={editDataId}
                  ></AddTodo_Section>
                </TODOContainer>
                <ListContainer>
                  <TodoList_Section
                    setEditContent={setEditContent}
                    filterOn={filterOn}
                    todoLeft={todoLeft}
                  ></TodoList_Section>
                </ListContainer>
              </GridLayout>
            </ContentWrapper>
          </div>
        </SelectedDateContext.Provider>
      </TodoListDispatchContext.Provider>
    </TodoListStateContext.Provider>
  );
};

const LogoWrapper = styled.div`
  width: auto;
  height: auto;
  background: transparent;
  /* 로고: absolute */
  position: absolute;
  left: 30px;
  top: 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: 90px;
  background: transparent;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarContainer = styled(BaseContainer)`
  width: 367px;
  height: 261px;
  flex-shrink: 0;
  grid-area: 1 / 1 / 2 / 2; /* 1행 1열 */
  background: transparent;
`;

const CalendarInnerContainer = styled(BaseInnerContainer)`
  width: 355px;
  height: 249px;
  flex-shrink: 0;
  background: #fff;
`;

const TODOContainer = styled(BaseContainer)`
  width: 665px;
  height: 261px;
  flex-shrink: 0;
  grid-area: 1 / 2 / 2 / 4; /* 1행 2~3열 */
`;

const ListContainer = styled(BaseContainer)`
  width: 1059px;
  height: 261px;
  flex-shrink: 0;
  grid-area: 2 / 1 / 3 / 4; /* 2행 전체 */
`;

export default Home;

// 좌상단 로고
// 3개의 container
//
