import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = (props) => {
  const { quote, author } = props;

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>

      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
