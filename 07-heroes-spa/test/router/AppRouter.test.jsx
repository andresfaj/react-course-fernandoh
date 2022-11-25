import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("Tests on <AppRouter /> component", () => {
  test("should show the login screen if i am not logged", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();
    expect(screen.getAllByText("Login")).toBeTruthy();
  });

  test("should show the marvel component if the use is logged", () => {
    const contextValue = {
      logged: true,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();
    expect(screen.getByText("Marvel Page")).toBeTruthy();
  });
});
