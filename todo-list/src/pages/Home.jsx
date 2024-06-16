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
//
