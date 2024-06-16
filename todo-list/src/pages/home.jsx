import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import Calendar from "../components/Calendar";

import {
  BaseContainer,
  BaseInnerContainer,
  Ellipse,
  GridLayout,
} from "../components/styledComponents";

const Home = () => {
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
    width: 180px;
    height: 70px;
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
  `;

  const CalendarInnerContainer = styled(BaseInnerContainer)`
    width: 355px;
    height: 249px;
    flex-shrink: 0;
  `;

  const TODOContainer = styled(BaseContainer)`
    width: 665px;
    height: 261px;
    flex-shrink: 0;
    grid-area: 1 / 2 / 2 / 4; /* 1행 2~3열 */
  `;

  const TODOInnerContainer = styled(BaseInnerContainer)`
    width: 653px;
    height: 249px;
    flex-shrink: 0;
  `;

  const ListContainer = styled(BaseContainer)`
    width: 1059px;
    height: 261px;
    flex-shrink: 0;
    grid-area: 2 / 1 / 3 / 4; /* 2행 전체 */
  `;

  const ListInnerContainer = styled(BaseInnerContainer)`
    width: 1047px;
    height: 249px;
    flex-shrink: 0;
  `;

  const ContainerTitle = styled.div`
    margin-left: 30px;
    margin-top: 5px;
    width: 100%;
    padding: 5px;
    height: auto;
    color: #000;
    text-align: left;
    font-family: Grandstander;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: transparent;
  `;

  const TODOInput = styled.textarea`
    width: 90%;
    height: 140px;
    flex-shrink: 0;
    border-radius: 7px;
    border: 1px solid #c8c8c8;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;
    font-size: 15px;
    color: #b0b0b0;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    resize: none;
  `;

  const ButtonWrapper = styled.div`
    margin-right: 40px;
    margin-bottom: 5px;
    width: 100%;
    padding: 10px;
    height: auto;
    background: transparent;
    display: flex;
    justify-content: end;
  `;

  const AddButton = styled.div`
    border-radius: 10px;
    border: 1px solid #7c7c7c;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    width: 35px;
    height: 27px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const AddButtonImg = styled.img`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    background: transparent;
  `;

  const TodoListWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 5px 0px 1px 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    background: transparent;
  `;

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
            <TODOInnerContainer>
              <ContainerTitle>ADD TODO</ContainerTitle>
              <TODOInput placeholder="할 일을 추가하세요."></TODOInput>
              <ButtonWrapper>
                <AddButton>
                  <AddButtonImg src="../public/Done.png"></AddButtonImg>
                </AddButton>
              </ButtonWrapper>
            </TODOInnerContainer>
          </TODOContainer>
          <ListContainer>
            <ListInnerContainer>
              <ContainerTitle>MY TODO LIST</ContainerTitle>
              <TodoListWrapper>
                {/* 실제 db에서 데이터 가져와야 함: TODO LIST */}
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
          </ListContainer>
        </GridLayout>
      </ContentWrapper>
    </div>
  );
};

export default Home;

// 좌상단 로고
// 3개의 container
//
