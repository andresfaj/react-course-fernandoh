import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Tests on todoReducer.js", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("Should to return the initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should to add one todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: " Nuevo todo 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should to delete one todo", () => {
    const action = {
      type: "[TODO] Delete todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    expect(newState).not.toContain(initialState);
  });

  test("should to change the done value of any todo", () => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(!initialState.done);
  });
});
