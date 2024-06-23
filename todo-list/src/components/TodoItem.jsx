import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { TodoListDispatchContext, TodoListStateContext } from "../pages/Home";
import { useEffect } from "react";

const TodoItem = ({
  date,
  todo_id,
  content,
  is_checked,
  emoji,
  onEditButton,
}) => {
  const onRemove = useContext(TodoListDispatchContext).onRemove;

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // 현재 item에 대한 id를 가져오는 로직 필요
      // 현재는 tmp id에 대한 삭제 구현
      onRemove(8);
    }
  };

  const handleEdit = () => {
    onEditButton({ todo_id });
  };

  return (
    <ItemWrapper>
      <CheckButton type="checkbox"></CheckButton>
      <ContentWrapper>
        <TodoContent>{content}</TodoContent>
        <Emoji src="../public/emoji.png" alt="emoji"></Emoji>
      </ContentWrapper>
      <ButtonWrapper>
        <ReviseBtn
          src="../public/revise.png"
          alt="revise"
          onClick={handleEdit}
        ></ReviseBtn>
        <DeleteBtn
          src="../public/delete.png"
          alt="delete"
          onClick={handleRemove}
        ></DeleteBtn>
      </ButtonWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: auto;
  height: auto;
  display: grid;
  /* content 영역이 남는 영역을 차지한다. */
  grid-template-columns: 30px 1fr 70px;
  gap: 10px;
  padding: 5px;
  margin: 0px 10px 3px 10px;
  background: transparent;
  border-bottom: 2px solid #a7a7a7;
`;

const ContentWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  background: transparent;
  align-items: center;
  justify-content: flex-start;
  line-height: 35px;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  width: 70px;
  height: 25px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  gap: 10px;
`;

const CheckButton = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid #a7a7a7;
  background: transparent;
`;

const TodoContent = styled.div`
  color: #000;
  font-family: Grandstander;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  background: transparent;
  width: auto;
  height: 100%;
  text-align: center;
`;

const Emoji = styled.img`
  width: 23.148px;
  height: 24.038px;
  flex-shrink: 0;
  cursor: pointer;
  background: transparent;
`;

const ReviseBtn = styled.img`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  cursor: pointer;
  background: transparent;
`;

const DeleteBtn = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
  background: transparent;
`;

export default TodoItem;

// 체크 버튼
// 할 일 내용 (content)
// 이모티콘 추가 버튼
// 수정 버튼
// delete button
