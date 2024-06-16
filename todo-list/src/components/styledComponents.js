import styled from "styled-components";

export const LoginWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const LogoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 60px;
  margin-left: 60px;
  margin-top: 60px;
  background: transparent;
  gap: 50px;
`;

export const InputWrapper = styled.div`
  width: auto;
  margin-right: 300px;
  margin-bottom: 200px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  background: transparent;
  align-items: flex-end;
  justify-content: center;
  gap: 15px;
`;

export const StyledForm = styled.form`
  width: auto;
  min-width: 200px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Logo = styled.img`
  width: 320px;
  height: 150px;
  background: transparent;
`;

export const Description = styled.div`
  width: 362px;
  height: 40px;
  flex-shrink: 0;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: transparent;
`;

export const Input = styled.input`
  width: 10rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 5px;
  border: 2px solid #fff;
  opacity: 0.3;
  background: #fff;
  box-shadow: 0px 4px 4px 0px #000;
  text-align: center;
  font-size: 15px;
`;

export const SubmitButton = styled.button`
  width: 65px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #595656;
  opacity: 0.3;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  cursor: pointer;
`;

export const NotMem = styled.div`
  width: auto;
  color: #909090;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
`;

export const GoJoin = styled.div`
  width: auto;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
  background: transparent;
  cursor: pointer;
`;
