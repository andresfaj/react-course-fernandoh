import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../src/auth";
import { Navbar } from "../../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Tests on <NavBar /> Component", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Juan Carlos",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks()); // es bueno cuando se usan jest functions

  test("should show the users name on the navbar", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Juan Carlos")).toBeTruthy();
  });

  test("should show the logout and navigate function, when the user pressed the logout btn", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
