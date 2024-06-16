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
  margin-left: 100px;
  margin-top: 100px;
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
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: transparent;
`;

export const Input = styled.input`
  width: 15rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 5px;
  border: 2px solid #fff;
  opacity: 0.5;
  background: #fff;
  box-shadow: 0px 4px 4px 0px #000;
  text-align: center;
  font-size: 17px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #595656;
  opacity: 0.5;
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

export const BaseContainer = styled.div`
  border: 3px solid #fff;
  box-shadow: 0px 4px 4px 0px rgba(81, 140, 255, 0.5);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseInnerContainer = styled.div`
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

export const Ellipse = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  fill: rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  background: transparent;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  width: auto;
  height: auto;
  background: transparent;
`;
