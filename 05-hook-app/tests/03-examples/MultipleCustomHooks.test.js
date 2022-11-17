import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

useFetch;

describe("Test on MultipleCustomHooks Functional Component", () => {
  const increment = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    handleIncrement: increment,
  });

  beforeEach(() => {
    //Asegurar que cada una de las funciones sea reseteado el mock
    jest.clearAllMocks(); //Limpiar pruebas
  });

  test("should to show the default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test("should to show one quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should to call the increment function", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(increment).toHaveBeenCalled();
  });
});
