import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.style.removeProperty("background");
    const navLinks = document.querySelectorAll(".link-item");
    const cartIcon = document.querySelector(".cart-icon");
    const cartQuantity = document.querySelector(".quantity-cart-display");
    navLinks.forEach((link) => {
      link.style.color = "white";
      link.classList.remove("catalog-underline");
    });
    if (cartIcon) cartIcon.classList.remove("icon-catalog");
    if (cartQuantity) {
      cartQuantity.classList.remove("cart-quantity-catalog");
      cartQuantity.classList.add("cart-quantity-home");
    }
  }, []);

  return (
    <div className="home">
      <p className="small-main-text">ONE OF THE FROG STORES OF ALL TIME</p>
      <p className="big-main-text">
        Get the best frogs, the frog juice, and more frogs
      </p>
      <Link to={"/catalog"}>
        <button type="button" className="home-shop-now-btn">
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Home;
