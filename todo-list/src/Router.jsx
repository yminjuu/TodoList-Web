import { createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";

// react-router-dom의 createBrowerRouter을 사용
// router을 만들어주었음

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/join",
    element: <Join></Join>,
  },
  {
    path: "/home/:id",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <Login></Login>,
    // 추후 바로 home으로 연결하되, 로그인 안되어있으면 login page로 route
  },
]);

export default router;
