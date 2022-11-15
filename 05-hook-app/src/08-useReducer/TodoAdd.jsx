import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const TodoAdd = (props) => {
  const { onNewTodo } = props;

  const { onInputChange, newTodo, onResetForm } = useForm({ newTodo: "" });

  const onSubmitAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.length <= 1) return;
    // const target = event.target;
    // console.log({ target });
    onNewTodo({ id: Date.now(), description: newTodo, done: false });
    onResetForm();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={onSubmitAddTodo}>
        <input
          type="text"
          name="newTodo"
          placeholder="Que hay que hacer?"
          className="form-control"
          value={newTodo}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func,
};

TodoAdd.defaultProps = {
  onNewTodo: () => {},
};
