import PropTypes from "prop-types";

export const Quote = (props) => {
  const { quote, author } = props;
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer"> {author} </footer>
    </blockquote>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
