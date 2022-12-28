import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Catalog from "./Catalog";
import MainNav from "./MainNav";
import ProductLanding from "./ProductLanding";
import ShoppingCart from "./ShoppingCart";
import FocusBackground from "./FocusBackground";

const RouteSwitch = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const [itemToAdd, setItemToAdd] = useState();
  const [cartQuantity, setCartQuantity] = useState(0);

  const toggleDisplayCart = () => {
    setDisplayCart(!displayCart);
  };

  const addToCart = (item) => {
    const newItem = item;
    console.log(newItem);
    setItemToAdd(newItem);
    setDisplayCart(!displayCart);
  };

  return (
    <BrowserRouter>
      <MainNav
        toggleDisplayCart={toggleDisplayCart}
        cartQuantity={cartQuantity}
      />

      <ShoppingCart
        toggleDisplayCart={toggleDisplayCart}
        isVisible={displayCart}
        newItem={itemToAdd}
        setCartQuantity={setCartQuantity}
      />

      <FocusBackground
        toggleDisplayCart={toggleDisplayCart}
        isVisible={displayCart}
      />

      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
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
