import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test on GridTest Component", () => {
  const category = "One Punch";

  test("Must show the loading text", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("Must show items/gifs when the hook useFetchGifs was executed (mock)", () => {
    const gifs = [
      { id: "ABC", title: "Saitama", url: "https://localhost/saitama.jpg" },
      { id: "123", title: "Goku", url: "https://localhost/goku.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    // screen.debug();
  });
});
