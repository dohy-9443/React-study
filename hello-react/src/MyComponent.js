import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      <h1>안녕하세요! 제 이름은 {props.name} 입니다!</h1>
      <h2>children 값은 '{props.children}'입니다.</h2>
    </div>
  );
};

// defaultProps 값 설정하기
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
