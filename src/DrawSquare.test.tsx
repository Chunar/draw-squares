import { render, screen } from "@testing-library/react";
import { colorRange, DrawSquare } from "./DrawSquare";

describe("#DrawSquare", () => {
  test.each([
    [10, 0, 16],
    [20, 5, 11],
  ])("renders x squares for x colors", (size, color, expectedDivs) => {
    render(<DrawSquare stepSize={size} startingColor={color as colorRange} />);

    const divCount = screen.getAllByTestId("drawsquare").length;

    expect(divCount).toEqual(expectedDivs);
  });
});
