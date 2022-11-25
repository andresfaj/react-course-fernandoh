import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import PrivateRoute from "../../src/router/PrivateRoute";

describe("Tests on <PrivateRoute />", () => {
  test("if i am logged on the app it should show the children", () => {
    Storage.prototype.setItem = jest.fn(); // Es como invocar el localstorage

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Juan Carlos",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
    // screen.debug();
  });
});
