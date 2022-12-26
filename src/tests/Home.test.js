import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";

describe("Home component", () => {
  it("Renders page correctly", () => {
    const { container } = render(<Home />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
});
