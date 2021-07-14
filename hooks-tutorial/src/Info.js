import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        &nbsp;&nbsp;
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <h1>
          <b>이름 : </b> {name}
        </h1>
        <h1>
          <b>닉네임 : </b> {nickname}
        </h1>
      </div>
    </div>
  );
};

export default Info;
