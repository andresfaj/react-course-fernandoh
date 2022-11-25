import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../../src/auth";
import { Navbar } from "../../../../src/ui";

describe("Tests on <NavBar /> Component", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Juan Carlos",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks()); // es bueno cuando se usan hest functions

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
});
