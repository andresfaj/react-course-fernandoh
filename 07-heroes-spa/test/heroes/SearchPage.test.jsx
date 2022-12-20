import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

//Components
import { SearchPage } from "../../src/heroes/pages/SearchPage";

describe("Tests on <SearchPage />", () => {
  test("should be showing with the default values", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test("should show to batman and the input with the value of the querystring", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
  });

  test('should to show an error if the heroe doesnt exists (batman123)', () => { second })
  test('should to show an error if the heroe doesnt exists', () => { second })
});
