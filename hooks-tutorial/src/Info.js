import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

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
