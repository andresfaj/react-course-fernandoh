import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Test on authReducer", () => {
  const initialState = {
    logged: false,
  };
  test("should to return the default value", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should to call the login action", () => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: "andres",
      },
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({ logged: true, user: action.payload });
  });

  test("should to call the logout action", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Juan" },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual(initialState);
  });
});
