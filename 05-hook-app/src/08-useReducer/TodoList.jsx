import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const { todos, onDeleteTodo, onToggleTodo } = props;
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
};
