import MainNav from "../components/MainNav";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const toggleDisplayCart = jest.fn();

describe("MainNav component", () => {
  it("Displays Cart Quantity Accurately", () => {
    const cartQuantity = 2;
    render(
      <MainNav
        toggleDisplayCart={toggleDisplayCart}
        cartQuantity={cartQuantity}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByTestId("cart-quantity").textContent).toBe("2");
  });

  it("Correctly calls callback to open cart", () => {
    const cartQuantity = 0;
    render(
      <MainNav
        toggleDisplayCart={toggleDisplayCart}
        cartQuantity={cartQuantity}
      />,
      { wrapper: MemoryRouter }
    );

    userEvent.click(screen.getByRole("button"));

    expect(toggleDisplayCart).toBeCalled();
  });
});
