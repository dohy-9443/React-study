import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      <h1>안녕하세요! 제 이름은 {name} 입니다!</h1>
      <h2>children 값은 '{children}'입니다.</h2>
      <h3>제가 좋아하는 숫자는 '{favoriteNumber}' 입니다.</h3>
    </div>
  );
};

// defaultProps 값 설정하기
MyComponent.defaultProps = {
  name: "기본 이름",
};

// propTypes 를 통한 props 검증
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
