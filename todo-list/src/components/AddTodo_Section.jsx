import styled from "styled-components";
import React from "react";
import {
  BaseContainer,
  BaseInnerContainer,
  GridLayout,
  ContainerTitle,
} from "../styles/styledComponents";

const AddTodo_Section = () => {
  return (
    <TODOInnerContainer>
      <ContainerTitle>ADD TODO</ContainerTitle>
      <TODOInput placeholder="할 일을 추가하세요."></TODOInput>
      <ButtonWrapper>
        <AddButton>
          <AddButtonImg src="../public/Done.png"></AddButtonImg>
        </AddButton>
      </ButtonWrapper>
    </TODOInnerContainer>
  );
};

export default AddTodo_Section;

const TODOInnerContainer = styled(BaseInnerContainer)`
  width: 653px;
  height: 249px;
  flex-shrink: 0;
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
  color: #6f6f6f;
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
