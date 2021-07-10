import React from "react";
import "./App.css";

function App() {
  const name = "React";
  const style = {
    // background-color는 backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: 48,
    fontWeight: "bold",
    padding: 16,
  };
  return <div style={style}>{name}</div>;
}

export default App;
