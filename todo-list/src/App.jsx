import { useState } from "react";
import "./App.css";
import router from "./Router";
import { RouterProvider } from "react-router-dom";

/* 라우터 실습 : react-router-dom의 RouterProvider 사용 -> 주소에 따라 여러가지 페이지로 route해준다. */
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
