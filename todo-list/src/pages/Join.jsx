import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import {
  LoginWrapper,
  LogoWrapper,
  InputWrapper,
  StyledForm,
  Logo,
  Description,
  Input,
} from "../styles/styledComponents";
import { SubmitButton as OrgSubmitButton } from "../styles/styledComponents";
import axios from "axios";

const Join = () => {
  // 특정 action이 발생했을 때 어떤 주소로 이동할 수 있게 해준다.
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const postRegister = () => {
    try {
      axios
        .post(`${BASE_URL}/api/users/register`, {
          username: id,
          password: pw,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <LogoWrapper>
        <Logo src="../public/logo/logo.png" alt="logo"></Logo>
        <Description>당신의 할 일을 기록해보세요</Description>
      </LogoWrapper>
      <InputWrapper>
        <ButtonWrapper>
          <LoginButton
            onClick={() => {
              navigate("/login");
            }}
          >
            &lt; 로그인 하러 가기
          </LoginButton>
        </ButtonWrapper>
        <StyledForm>
          <Input
            name="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              e.currentTarget.focus();
            }}
            type="text"
            placeholder="아이디"
          ></Input>
          <Input
            name="pw"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            type="password"
            placeholder="비밀번호"
          ></Input>
          <CustomSubmitButton
            type="submit"
            onClick={(e) => {
              e.preventDefault(); //폼 제출을 방지한다
              // 회원가입 -> db 관리 필요
              postRegister();
              navigate(`/login`);
            }}
          >
            회원가입 완료
          </CustomSubmitButton>
        </StyledForm>
      </InputWrapper>
    </LoginWrapper>
  );
};

const CustomSubmitButton = styled(OrgSubmitButton)`
  width: 120px;
  height: 45px;
`;

const ButtonWrapper = styled.div`
  width: auto;
  min-width: 15rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LoginButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 0.9375rem;
  border: 2px solid #fff;
  opacity: 0.5;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background: transparent;
  color: #333333;
  font-weight: 700;

  &:hover {
    opacity: 1;
    background-color: white;
  }
`;

export default Join;
