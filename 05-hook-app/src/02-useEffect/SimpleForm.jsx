import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "strider",
    email: "andres@gmail.com",
  });

  const { userName, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState((prevValue) => ({ ...prevValue, [name]: value }));
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("form changed");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed");
  }, [formState.email]);

  return (
    <div>
      <h1>Simple form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="andres@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {userName === "strider2" && <Message />}
    </div>
  );
};
