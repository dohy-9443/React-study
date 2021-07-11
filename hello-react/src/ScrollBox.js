import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
      앞 코드에서 비구조화 할당 문법을 사용했다.
      다음 코드와 같은 의미이다.
      const scrollHeight = this.box.scrollHeight
      const clientHeight = this.box.clientHeight
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid #000",
      height: 300,
      width: 300,
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: 650,
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
