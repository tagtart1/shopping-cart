import React from "react";
import "../styles/ShoppingCartItem.css";

const ShoppingCartItem = (props) => {
  return (
    <div className="cart-item">
      <img
        className="cart-img"
        src={props.item.img}
        alt="Product In Cart"
      ></img>
      <div className="cart-item-details">
        <div>{props.item.name}</div>
        <div className="quantity-adjust">
          <button
            className="quantity-change-btn"
            onClick={() => {
              props.decrementItemQuantity(props.item.id);
            }}
          >
            -
          </button>
          <div>{props.item.quantity}</div>
          <button
            className="quantity-change-btn"
            onClick={() => {
              props.incrementItemQuantity(props.item.id);
            }}
          >
            +
          </button>
        </div>
        <div>${props.item.price}</div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
