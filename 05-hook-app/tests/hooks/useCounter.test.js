const { renderHook } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { useCounter } = require("../../src/hooks/useCounter");

describe("Test on useCounter custom Hook", () => {
  test("Must return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, handleDecrement, handleIncrement, handleReset } =
      result.current;

    expect(counter).toBe(10);
    expect(handleDecrement).toEqual(expect.any(Function));
    expect(handleIncrement).toEqual(expect.any(Function));
    expect(handleReset).toEqual(expect.any(Function));
  });

  test("should create the counter with 100 as value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Must increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { handleIncrement } = result.current;

    act(() => {
      handleIncrement();
    });

    expect(result.current.counter).toBe(11);
  });

  test("Must decrement the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { handleDecrement } = result.current;

    act(() => {
      handleDecrement();
    });

    expect(result.current.counter).toBe(9);
  });

  test("Must reset the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, handleReset } = result.current;

    act(() => {
      handleReset();
    });

    expect(result.current.counter).toBe(counter);
  });
});
