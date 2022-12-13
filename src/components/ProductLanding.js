import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "../styles/ProductLanding.css";

const ProductLanding = () => {
  const location = useLocation();
  const { img, name, price } = location.state;

  return (
    <div>
      <img src={img} alt={"Product"}></img>
      <div>
        <div className="quantity-group">
          <div className="quantity-selector">
            <label htmlFor="quantity">Qty</label>
            <select name="quantity" id="quantity">
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
          <button>ADD TO CART</button>
        </div>
        <Link to={"/catalog"}>{`< Go Back`}</Link>
      </div>
    </div>
  );
};

export default ProductLanding;
