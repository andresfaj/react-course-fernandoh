import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, handleDecrement, handleIncrement, handleReset } =
    useCounter();

  return (
    <>
      <h1>CounterWithCustomHook : {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => handleIncrement(3)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => handleDecrement(3)}>
        -1
      </button>
    </>
  );
};
