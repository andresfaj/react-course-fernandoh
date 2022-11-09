import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe("Test on GiftItem Component", () => {
  const title = "Test item";
  const url = "https://photos.com/";
  test("Must match with the snapshot", () => {
    const { container } = render(<GiftItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Must show the image with url and Alt", () => {
    render(<GiftItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Must show the title", () => {
    render(<GiftItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
