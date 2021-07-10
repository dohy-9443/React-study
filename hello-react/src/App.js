import React from "react";
import "./App.css";

function App() {
  const name = "React";
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성
        backgroundColor: "black",
        color: "aqua",
        fontSize: 48,
        fontWeight: "bold",
        padding: 16,
      }}
    >
      {name}
    </div>
  );
}

export default App;
