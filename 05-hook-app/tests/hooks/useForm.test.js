import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe("Test on useForm custom hook", () => {
  const initialForm = {
    name: "Andres",
    email: "achuryjaramillo@gmail.com",
  };
  const newValue = "Juan";

  test("should to return the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should to change the name input of form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
  });

  test("should to reset the form with the initial form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.email).toBe(initialForm.email);
  });
});
