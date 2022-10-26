import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/App";

describe("Test on FirstApp", () => {
  const title = "Hola, soy goku";
  const subTitle = "Soy un subtitulo";

  test("Must match with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Must show the message 'Hola soy goku'", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();

    //screen.debug() to see the object, el screen esta actualizado con los cambios que sucedan en el elemento
  });

  test("Must show the title into a H1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Must show the subtitle sended by props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
