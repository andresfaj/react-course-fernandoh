import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test on AddCategory Component", () => {
  test("Must change the value of the textfield", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
    screen.debug();
  });

  test("Must call onNewCategory if the input has any value", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled(); // que se llame 1 o mas veces
    expect(onNewCategory).toHaveBeenCalledTimes(1); //Que la funcion se llame al menos 1 vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Que la funcion se llame con el valor
  });

  test("Must not call onNewCategory if the input is empty", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0); // que se llame 0 veces
    expect(onNewCategory).not.toHaveBeenCalled(); // que se llame 0 veces
  });
});
