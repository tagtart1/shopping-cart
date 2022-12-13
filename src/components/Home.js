import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const toggleCatalogStyle = () => {
    const navLinks = document.querySelectorAll(".link-item");
    navLinks.forEach((link) => {
      link.style.color = "#b8d8be";
      link.classList.add("catalog-underline");
    });
    document.body.style.background = "none";
  };

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
