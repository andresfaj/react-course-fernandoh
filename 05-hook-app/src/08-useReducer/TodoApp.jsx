//Components
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

//Hooks
import { useTodos } from "../hooks/";

export const TodoApp = () => {
  const {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todos,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small> pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
