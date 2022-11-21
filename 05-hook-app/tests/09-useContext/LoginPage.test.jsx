import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Test on LoginPage F.Component", () => {
  test("should to show the component without the user ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    // screen.debug();

    const tagPre = screen.getByLabelText("pre");
    expect(tagPre.innerHTML).toBe("null");
  });

  test("should to call the setUser Fuction when the button is clicked", () => {
    const handleUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: handleUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const tagButton = screen.getByRole("button");
    fireEvent.click(tagButton);

    expect(handleUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "DD",
      email: "aa@gmail.com",
    });
  });
});
