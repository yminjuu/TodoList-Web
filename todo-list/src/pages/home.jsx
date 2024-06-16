import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const { id } = useParams();
  console.log(id);
  //사용자 id 출력

  return <div>Home page</div>;
};

export default Home;

// 좌상단 로고
// 3개의 container
// 구성
// Container 1. 이전에 만든 달력 활용
// Container 2. text area, 입력 버튼
// Container 3. 할일 목록 표시, scroll 가능
