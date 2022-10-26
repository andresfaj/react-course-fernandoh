import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Test on CounterApp component", () => {
  const initialValue = 100;

  test("Must match with the snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Must show 100 as an initial value", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initialValue.toString()
    );
  });

  test("Must increment with the plus button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+ 1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("Must decrement with the less button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("- 1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("Must works the reset button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+ 1"));
    fireEvent.click(screen.getByText("+ 1"));
    fireEvent.click(screen.getByText("+ 1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue.toString())).toBeTruthy();
  });
});
