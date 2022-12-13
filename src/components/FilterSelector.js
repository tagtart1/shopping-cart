import { React } from "react";
import "../styles/FilterSelector.css";

const FilterSelector = (props) => {
  return (
    <div className="filter-selector">
      <div className="current-filter">
        <p className="directory-text">Shop /</p>
        <p className="current-filter-text">{props.currentFilter}</p>
      </div>
      <ul className="filter-names">
        <li onClick={props.changeProductFilter}>All Products</li>
        <li onClick={props.changeProductFilter}>Frogs</li>
        <li onClick={props.changeProductFilter}>Food</li>
        <li onClick={props.changeProductFilter}>Accessories</li>
      </ul>
    </div>
  );
};

export default FilterSelector;
