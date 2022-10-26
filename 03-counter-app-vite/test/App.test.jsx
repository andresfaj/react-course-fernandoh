import { render } from "@testing-library/react";
import { FirstApp } from "../src/App";

describe("Test on FirstApp", () => {
  /** La preba del snapshot se recomienda hacer al final del componente */
  //   test("Must match with the snapshot", () => {
  //     const title = "Hola, soy goku";
  //     const { container } = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot();
  //   });

  test("Must show the title into H1 tag", () => {
    const title = "Hola, soy goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Must show the subtitle sended by props", () => {
    const title = "Hola, soy goku";
    const subTitle = "Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
