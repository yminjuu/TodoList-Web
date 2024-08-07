import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { TodoListDispatchContext, TodoListStateContext } from "../pages/Home";
import { useEffect, useState } from "react";

const TodoItem = ({
  date,
  todo_id,
  content,
  is_checked,
  onEditButton,
  onCheck,
  emoji,
}) => {
  const onRemove = useContext(TodoListDispatchContext).onRemove;
  const onEmojiAdd = useContext(TodoListDispatchContext).onEmojiAdd;
  const emojiArray = ["😊", "🙂", "🤔", "😵‍💫", "🤯"];

  const [isChecked, toggleChecked] = useState(is_checked);
  const [emojiState, changeEmoji] = useState(emoji);

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(todo_id);
    }
  };

  const handleEdit = () => {
    onEditButton({ todo_id });
  };

  const handleCheck = () => {
    toggleChecked(!isChecked);
    onCheck(todo_id, !isChecked);
  };

  const handleEmojiClick = (emoji) => {
    changeEmoji(emojiState);
    onEmojiAdd(todo_id, emoji);
  };

  return (
    <ItemWrapper>
      <CheckButton
        type="checkbox"
        onChange={handleCheck}
        checked={isChecked}
      ></CheckButton>
      <EmojiWrapper>
        {emoji ? (
          <EmojiButton placeholder={emoji}></EmojiButton>
        ) : (
          <EmojiImgButton src="../public/emoji.png"></EmojiImgButton>
        )}
        <DropDownBox className="DropDownBox">
          {emojiArray.map((it) => (
            <HoverButton
              onClick={() => {
                handleEmojiClick(it);
              }}
            >
              {it}
            </HoverButton>
          ))}
        </DropDownBox>
      </EmojiWrapper>
      <ContentWrapper>
        <TodoContent>{content}</TodoContent>
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
  grid-template-columns: 30px 30px 1fr 70px;
  gap: 10px;
  padding: 5px;
  margin: 0px 10px 3px 10px;
  background: transparent;
  border-bottom: 2px solid #a7a7a7;
`;

const ContentWrapper = styled.div`
  width: 300px;
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
  gap: 5px;
`;

const CheckButton = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid #a7a7a7;
  background: transparent;
`;

const EmojiWrapper = styled.div`
  width: 30px;
  height: 24.038px;
  flex-shrink: 0;
  cursor: pointer;
  background: transparent;
  position: relative;
  display: inline-block;
  &:hover {
    cursor: pointer;
    color: #7c7c7c;
    .DropDownBox {
      display: flex;
    }
  }
`;

const EmojiButton = styled.input`
  height: 30px;
  width: 30px;
  background: transparent;
  cursor: pointer;
  font-size: 25px;
  border: none;
  padding: 0;
`;

const EmojiImgButton = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  background: transparent;
`;

const DropDownBox = styled.div`
  background: transparent;
  position: absolute;
  display: none;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  z-index: 1;
  height: 30px;
  width: 180px;
  top: 30px;
  right: -150px;
  border: 2px solid black;
  border-radius: 10px;
`;

const HoverButton = styled.div`
  width: 30px;
  height: 30px;
  font-size: 25px;
  color: 656565;
  background: transparent;
  text-align: center;
  line-height: 33px;
  &:hover {
    background-color: #cbcbcb;
    border-radius: 10px;
  }
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
