import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef(null);

  const onSetFocus = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        type="text"
        placeholder="Enter your name"
        className="form-control"
        ref={inputRef}
      />

      <button onClick={onSetFocus} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
