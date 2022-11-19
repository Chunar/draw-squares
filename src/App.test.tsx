import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders input components to take conditions", () => {
  render(<App />);

  expect(screen.getByTestId("stepSizeInput")).toBeInTheDocument();
  expect(screen.getByTestId("startingColotInput")).toBeInTheDocument();
});
