import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/ProductLanding.css";

const ProductLanding = (props) => {
  const location = useLocation();
  const { img, name, price, id } = location.state;

  const handleAddToCart = (e) => {
    const quantity = document.getElementById("quantity").value;

    const cartItem = {
      quantity: Number(quantity),
      price: Number(price.replace("$", "")),
      img: img,
      name: name,
      totalCost: Number(price.replace("$", "")) * Number(quantity),
      id: id,
    };

    props.addToCart(cartItem);
  };

  useEffect(() => {
    //Initial Page Styles Setup
    const navLinks = document.querySelectorAll(".link-item");
    const cartIcon = document.querySelector(".cart-icon");
    const cartQuantity = document.querySelector(".quantity-cart-display");
    navLinks.forEach((link) => {
      link.style.color = "#b8d8be";
      link.classList.add("catalog-underline");
    });
    document.body.style.background = "none";
    cartIcon.classList.add("icon-catalog");
    if (cartQuantity) {
      cartQuantity.classList.add("cart-quantity-catalog");
      cartQuantity.classList.remove("cart-quantity-home");
    }
  }, []);

  return (
    <div className="product-landing">
      <img src={img} alt={"Product"}></img>
      <div className="right-column">
        <div className="title-group">
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </div>
        <div className="button-group">
          <div className="quantity-group">
            <div className="quantity-selector">
              <label htmlFor="quantity">Qty</label>
              <select name="quantity" id="quantity">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
          <Link className="go-back-btn" to={"/catalog"}>{`< Go Back`}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
