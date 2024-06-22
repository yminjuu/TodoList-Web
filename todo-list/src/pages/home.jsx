import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import Calendar from "../components/Calendar";
import TodoList_Section from "../components/TodoList_Section";
import AddTodo_Section from "../components/AddTodo_Section";

import {
  BaseContainer,
  BaseInnerContainer,
  GridLayout,
} from "../styles/styledComponents";

const Home = () => {
  const { id } = useParams();
  console.log(id);
  //사용자 id 출력

  return (
    <div>
      <LogoWrapper>
        <Logo src="../public/logo/logo.png" alt="logo"></Logo>
      </LogoWrapper>
      <ContentWrapper>
        <GridLayout>
          <CalendarContainer>
            <CalendarInnerContainer>
              <Calendar></Calendar>
            </CalendarInnerContainer>
          </CalendarContainer>
          <TODOContainer>
            <AddTodo_Section></AddTodo_Section>
          </TODOContainer>
          <ListContainer>
            <TodoList_Section></TodoList_Section>
          </ListContainer>
        </GridLayout>
      </ContentWrapper>
    </div>
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
