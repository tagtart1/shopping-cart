import { React } from "react";
import { Link } from "react-router-dom";
import "../styles/MainNav.css";

const MainNav = (props) => {
  const toggleCatalogStyle = () => {
    const navLinks = document.querySelectorAll(".link-item");
    navLinks.forEach((link) => {
      link.style.color = "#b8d8be";
      link.classList.add("catalog-underline");
    });
    document.body.style.background = "none";
  };

  const toggleHomeStyle = () => {
    document.body.style.removeProperty("background");
    const navLinks = document.querySelectorAll(".link-item");
    navLinks.forEach((link) => {
      link.style.color = "white";
      link.classList.remove("catalog-underline");
    });
  };

  const showCart = () => {
    props.toggleDisplayCart();
  };

  return (
    <nav className="main-nav">
      <Link className="link-item h1" to={"/"} onClick={toggleHomeStyle}>
        Frog Market
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="link-item tab" to={"/"} onClick={toggleHomeStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="link-item tab"
            to={"/catalog"}
            onClick={toggleCatalogStyle}
          >
            Products
          </Link>
        </li>
        <li>
          <button onClick={showCart}>Cart</button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
