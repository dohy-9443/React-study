import React from "react";

function App() {
  const name = "JavaScript";
  return <div>{name === "React" ? <h1>리액트입니다.</h1> : null}</div>;
}

export default App;
