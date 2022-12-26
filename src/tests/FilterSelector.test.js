import FilterSelector from "../components/FilterSelector";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onClickCallback = jest.fn();

describe("Filter Selector Component", () => {
  it("User can click a filter", () => {
    render(<FilterSelector changeProductFilter={onClickCallback} />);

    const listItems = screen.getAllByRole("listitem");
    userEvent.click(listItems[1]);
    expect(onClickCallback).toHaveBeenCalledTimes(1);
  });
});
