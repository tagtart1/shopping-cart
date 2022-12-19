import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const toggleCatalogStyle = () => {
    const navLinks = document.querySelectorAll(".link-item");
    navLinks.forEach((link) => {
      link.style.color = "#b8d8be";
      link.classList.add("catalog-underline");
    });
    document.body.style.background = "none";
  };

  useEffect(() => {
    document.body.style.removeProperty("background");
    const navLinks = document.querySelectorAll(".link-item");
    const cartIcon = document.querySelector(".cart-icon");
    navLinks.forEach((link) => {
      link.style.color = "white";
      link.classList.remove("catalog-underline");
    });
    cartIcon.classList.remove("icon-catalog");
  }, []);

  return (
    <div className="home">
      <p className="small-main-text">ONE OF THE FROG STORES OF ALL TIME</p>
      <p className="big-main-text">
        Get the best frogs, the frog juice, and more frogs
      </p>
      <Link to={"/catalog"}>
        <button
          type="button"
          className="home-shop-now-btn"
          onClick={toggleCatalogStyle}
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Home;
