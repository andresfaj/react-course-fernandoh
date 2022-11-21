import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Test on TodoApp F.Component", () => {
  useTodos.mockReturnValue({
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    todos: [
      { id: 1, description: "Todo 1", done: false },
      { id: 2, description: "Todo 2", done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
  });

  test("should to show the rigth component", () => {
    render(<TodoApp />);
    // screen.debug();
    expect(screen.getByText("Todo 1")).toBeTruthy();
    expect(screen.getByText("Todo 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
