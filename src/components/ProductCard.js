import { React } from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt={"Product"}></img>
      <p className="product-name">{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
