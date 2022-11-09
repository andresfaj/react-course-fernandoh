import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test on the useFetchGifs Hook", () => {
  test("Must to return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Must to return an images array and isLoading like false", async () => {
    const { result } = renderHook(() => useFetchGifs("One punch"));

    // await waitFor(() =>
    //   expect(result.current.images.length).toBeGreaterThan(0)
    // );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
