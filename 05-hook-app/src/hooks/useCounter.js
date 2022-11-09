import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = (value) => {
    setCounter(counter + value);
  };

  const handleDecrement = (value) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
