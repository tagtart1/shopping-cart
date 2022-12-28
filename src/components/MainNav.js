import { React } from "react";
import { Link } from "react-router-dom";

import "../styles/MainNav.css";
import cartIcon from "../images/shopping-bag-icon.svg";

const MainNav = (props) => {
  const showCart = () => {
    props.toggleDisplayCart();
  };

  const display = {
    display: "none",
  };

  return (
    <nav className="main-nav">
      <Link className="link-item h1" to={"/"}>
        Frog Market
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="link-item tab" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link-item tab" to={"/catalog"}>
            Products
          </Link>
        </li>
        <li>
          <button onClick={showCart} className="cart-btn">
            <img className="cart-icon" src={cartIcon} alt="Shopping Bag"></img>
            {props.cartQuantity < 1 ? (
              <div className="quantity-cart-display" style={display}>
                {props.cartQuantity}
              </div>
            ) : (
              <div
                className="quantity-cart-display"
                data-testid="cart-quantity"
              >
                {props.cartQuantity}
              </div>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
