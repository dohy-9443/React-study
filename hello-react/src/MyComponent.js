import React from "react";

const MyComponent = (props) => {
  return <h1>안녕하세요! 제 이름은 {props.name} 입니다!</h1>;
};

// defaultProps 값 설정하기
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
