import PropTypes from "prop-types";

export const TodoItem = (props) => {
  const { todo, onDeleteTodo, onToggleTodo } = props;
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
};
