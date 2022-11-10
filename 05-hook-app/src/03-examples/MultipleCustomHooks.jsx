import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, handleIncrement, handleDecrement } = useCounter(1);
  console.log({ counter });
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        onClick={() => handleIncrement(1)}
        disabled={isLoading}
      >
        Next quote
      </button>

      <button
        className="btn btn-primary"
        onClick={() => handleDecrement(1)}
        disabled={isLoading || counter === 1}
      >
        Prev quote
      </button>
    </>
  );
};
