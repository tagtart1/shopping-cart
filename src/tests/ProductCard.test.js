import ProductCard from "../components/ProductCard";
import { render, screen } from "@testing-library/react";

describe("Product Card Component", () => {
  it("Product Card display correct information", () => {
    const img = "testing";
    const name = "Test";
    const price = "3.99";

    render(<ProductCard img={img} name={name} price={price} />);

    expect(screen.getByAltText("Product").src).toBe("http://localhost/testing");
    expect(screen.getByText("Test")).not.toBeNull();
    expect(screen.getByText("3.99")).not.toBeNull();
  });
});
