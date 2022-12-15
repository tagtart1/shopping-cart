import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Catalog from "./Catalog";
import MainNav from "./MainNav";
import ProductLanding from "./ProductLanding";
import ShoppingCart from "./ShoppingCart";
import FocusBackground from "./FocusBackground";

const RouteSwitch = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleDisplayCart = () => {
    setDisplayCart(!displayCart);
  };

  const addToCart = (item) => {
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <MainNav toggleDisplayCart={toggleDisplayCart} />

      <ShoppingCart
        toggleDisplayCart={toggleDisplayCart}
        isVisible={displayCart}
      />

      <FocusBackground
        toggleDisplayCart={toggleDisplayCart}
        isVisible={displayCart}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/catalog/:id"
          element={<ProductLanding addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
