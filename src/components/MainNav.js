import { React } from "react";
import { Link } from "react-router-dom";
import "../styles/MainNav.css";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link className="link-item" to={"/"}>
        <h1>Frog Market</h1>
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="link-item" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link-item" to={"/catalog"}>
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
