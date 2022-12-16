import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.css";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const [cart, setCart] = useState([]);

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

    if (isDone) return;
    cartCopy.push(itemToAdd);
    console.log(cartCopy);
    setCart(cartCopy);
  };

  const incrementItemQuantity = (itemId) => {
    const cartCopy = [...cart];
    cartCopy.forEach((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
        item.totalCost = item.quantity * item.price;
        setCart(cartCopy);
      }
    });
  };

  const decrementItemQuantity = (itemId) => {
    const cartCopy = [...cart];
    cartCopy.forEach((item, index) => {
      if (item.id === itemId) {
        item.quantity -= 1;
        item.totalCost = item.quantity * item.price;
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
          {cart.map((item) => {
            return (
              <ShoppingCartItem
                key={item.id}
                item={item}
                incrementItemQuantity={incrementItemQuantity}
                decrementItemQuantity={decrementItemQuantity}
              />
            );
          })}
          <Link
            to={"/catalog"}
            className="browse-more-btn"
            onClick={hideCartDisplay}
          >
            BROWSE MORE
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ShoppingCart;
