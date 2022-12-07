import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import MainNav from "./MainNav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
