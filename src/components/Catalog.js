import { React, useState, useEffect } from "react";
import "../styles/Catalog.css";
import FilterSelector from "./FilterSelector";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [currentFilter, setCurrentFilter] = useState("allproducts");
  const [currentFilterText, setCurrentFilterText] = useState("All Products");

  const changeProductFilter = (e) => {
    const filter = e.target.textContent.toLowerCase().replace(" ", "");
    setCurrentFilter(filter);

    setCurrentFilterText(e.target.textContent);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".link-item");
    const cartIcon = document.querySelector(".cart-icon");
    navLinks.forEach((link) => {
      link.style.color = "#b8d8be";
      link.classList.add("catalog-underline");
    });
    document.body.style.background = "none";
    cartIcon.classList.add("icon-catalog");
  }, []);

  return (
    <div className="catalog-container">
      <FilterSelector
        changeProductFilter={changeProductFilter}
        currentFilter={currentFilterText}
      />
      <div className="products-container">
        {currentFilter !== "allproducts"
          ? ProductList[currentFilter].map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${item.name.replace(" ", "-").toLowerCase()}`}
                  state={{
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    id: item.id,
                  }}
                >
                  <ProductCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </Link>
              );
            })
          : Object.keys(ProductList).map((property) => {
              return ProductList[property].map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`${item.name.replace(" ", "-").toLowerCase()}`}
                    state={{
                      img: item.img,
                      name: item.name,
                      price: item.price,
                      id: item.id,
                    }}
                  >
                    <ProductCard
                      img={item.img}
                      name={item.name}
                      price={item.price}
                    />
                  </Link>
                );
              });
            })}
      </div>
    </div>
  );
};

export default Catalog;
