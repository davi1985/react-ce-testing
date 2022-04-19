/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render correctly", () => {
    render(<App />);

    const title = screen.getByText("Hello World Testing");

    expect(title).toBeInTheDocument();
  });
});
