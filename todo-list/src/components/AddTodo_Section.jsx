import styled from "styled-components";
import React from "react";
import { BaseInnerContainer, ContainerTitle } from "../styles/styledComponents";
import { useContext } from "react";
import {
  TodoListDispatchContext,
  TodoListStateContext,
  SelectedDateContext,
} from "../pages/Home";
import { useRef, useState, useEffect } from "react";

// editDataId를 props로 받아서 수정 데이터를 가져올 것이다.
const AddTodo_Section = ({ isEdit, editDataId }) => {
  // 수정 버튼 클
  const onEdit = useContext(TodoListDispatchContext).onEdit;
  const onCreate = useContext(TodoListDispatchContext).onCreate;
  const selectedDate = useContext(SelectedDateContext);
  const todoData = useContext(TodoListStateContext);

  console.log(selectedDate);

  // 작성된 content 관리
  const [content, setContent] = useState("");
  const contentInput = useRef();

  const addTodo = () => {
    if (content.length < 1) {
      contentInput.current.focus();
      return;
    }
    // 새로운 일기를 작성하는 경우
    if (isEdit == false) {
      if (window.confirm("새로운 일기를 작성하시겠습니까?")) {
        onCreate({
          date: selectedDate,
          content,
        });
        setContent("");
      }
    }
    // 수정 버튼을 눌러서 content를 불러와야 하는 경우
    else {
      if (window.confirm("일기를 수정하시겠습니까?")) {
        onEdit({
          targetId: editDataId,
          date: selectedDate,
          content,
          is_checked: false,
          emoji: "NULL",
        });
        setContent("");
      }
    }
  };

  //수정하기를 누른 TODO 데이터를 불러오기 위함
  useEffect(() => {
    if (isEdit) {
      if (todoData.length >= 1) {
        const targetTodo = todoData.find(
          (it) => parseInt(it.todo_id) === parseInt(editDataId)
        );

        if (targetTodo) {
          setContent(targetTodo.content);
        }
      }
    }
  }, [isEdit, editDataId, todoData]);

  return (
    <TODOInnerContainer>
      <TitleContainer>
        <StyledContainerTitle>ADD TODO</StyledContainerTitle>
        <InfoWrapper>
          <InfoDate>
            {selectedDate.getFullYear()} . {selectedDate.getMonth() + 1} .{" "}
            {selectedDate.getDate()}
          </InfoDate>
        </InfoWrapper>
      </TitleContainer>
      <TODOInput
        placeholder="할 일을 추가하세요."
        ref={contentInput}
        value={content}
        onChange={(e) => {
          contentInput.current.focus();
          setContent(e.target.value);
        }}
      ></TODOInput>
      <ButtonWrapper>
        <AddButton onClick={addTodo}>
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
`;

const StyledContainerTitle = styled(ContainerTitle)`
  width: 150px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 30px;
  background: transparent;
  line-height: 37px;
  font-size: 17px;
  margin: 0;
`;

const InfoDate = styled.div`
  background: transparent;
  font-weight: 400;
`;

const EmojiInput = styled.div`
  background: transparent;
`;

const TODOInput = styled.textarea`
  width: 90%;
  height: 120px;
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
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #7c7c7c;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
