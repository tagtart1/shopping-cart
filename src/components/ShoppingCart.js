import React, { useEffect } from "react";
import "../styles/ShoppingCart.css";
import { motion, AnimatePresence } from "framer-motion";

const ShoppingCart = (props) => {
  const hideCartDisplay = (e) => {
    props.toggleDisplayCart();
  };

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
          <button className="browse-more-btn">BROWSE MORE</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ShoppingCart;
