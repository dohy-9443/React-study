import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        &nbsp;&nbsp;
        <input value={nickname} onChange={onChangeNickname} />
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
