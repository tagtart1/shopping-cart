import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.css";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartItem from "./ShoppingCartItem";
import frogIcon from "../images/cart-frog.svg";

const ShoppingCart = (props) => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0.0);

  const hideCartDisplay = (e) => {
    props.toggleDisplayCart();
  };

  const combineSimilarItems = (itemToAdd) => {
    if (!itemToAdd) return;
    let cartCopy = [...cart];
    let isDone = false;

    cartCopy.forEach((item) => {
      if (item.id === itemToAdd.id) {
        item.quantity += itemToAdd.quantity;
        item.totalCost = item.quantity * item.price;
        setCart(cartCopy);
        isDone = true;
      }
    });
    setSubtotal(
      Number((subtotal + itemToAdd.quantity * itemToAdd.price).toFixed(2))
    );
    console.log(getCartQuantity());

    if (isDone) return;
    cartCopy.push(itemToAdd);
    setCart(cartCopy);
  };

  const incrementItemQuantity = (itemId) => {
    const cartCopy = [...cart];
    cartCopy.forEach((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
        item.totalCost = item.quantity * item.price;
        setSubtotal(Number((subtotal + item.price).toFixed(2)));
        setCart(cartCopy);
      }
    });
  };

  const getCartQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });

    return total;
  };

  const decrementItemQuantity = (itemId) => {
    const cartCopy = [...cart];
    cartCopy.forEach((item, index) => {
      if (item.id === itemId) {
        item.quantity -= 1;
        item.totalCost = item.quantity * item.price;
        setSubtotal(Number((subtotal - item.price).toFixed(2)));
        // Remove from cart at 0 quantity
        if (item.quantity <= 0) {
          cartCopy.splice(index, 1);
        }
        setCart(cartCopy);
      }
    });
  };

  useEffect(() => {
    combineSimilarItems(props.newItem);
  }, [props.newItem]);

  useEffect(() => {
    props.setCartQuantity(getCartQuantity());
  }, [cart]);

  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          key="cart"
          className="shopping-cart"
          initial={{ right: "-100%" }}
          animate={{ right: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          exit={{ right: "-100%" }}
        >
          <button className="close-cart-button" onClick={hideCartDisplay}>
            ✖
          </button>
          <div>Your Shopping Cart</div>
          <div className="cart-items">
            {getCartQuantity() < 1 ? (
              <div className="empty-cart-text">Your cart is empty.</div>
            ) : (
              cart.map((item) => {
                return (
                  <ShoppingCartItem
                    key={item.id}
                    item={item}
                    incrementItemQuantity={incrementItemQuantity}
                    decrementItemQuantity={decrementItemQuantity}
                  />
                );
              })
            )}
          </div>

          {getCartQuantity() < 1 ? (
            <div className="bottom-group empty">
              <img
                className="empty-cart-img"
                src={frogIcon}
                alt="Sad Frog"
              ></img>
              <Link
                to={"/catalog"}
                className="browse-more-btn"
                onClick={hideCartDisplay}
              >
                BROWSE MORE
              </Link>
            </div>
          ) : (
            <div className="bottom-group fill">
              <div className="subtotal-text">Subtotal: ${subtotal}</div>
              <Link
                to={"/catalog"}
                className="browse-more-btn"
                onClick={hideCartDisplay}
              >
                CHECKOUT
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ShoppingCart;
