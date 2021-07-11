import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid #000",
      height: 300,
      width: 300,
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "80%",
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
