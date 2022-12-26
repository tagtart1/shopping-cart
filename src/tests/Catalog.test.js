/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Catalog from "../components/Catalog";

jest.mock("../components/FilterSelector", () => (props) => (
  <div>
    <div data-testid="current-filter">{props.currentFilter}</div>
    <ul>
      <li
        data-testid="filter"
        onClick={(e) => {
          props.changeProductFilter(e);
        }}
      >
        Red
      </li>
      <li data-testid="filter-two" onClick={props.onClickCallback}>
        Blue
      </li>
    </ul>
  </div>
));

describe("Catalog Component", () => {
  it("Catalog handles changing the filter", () => {
    const { container } = render(<Catalog />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByTestId("filter"));
  });
});
