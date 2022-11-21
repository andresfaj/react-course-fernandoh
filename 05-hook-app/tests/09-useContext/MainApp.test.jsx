import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("Test on MainApp Component", () => {
  test("should to show the main app screen", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should to show the LoginPage screen", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
