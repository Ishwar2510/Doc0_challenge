import React from "react";
import "./ProductCard.css";
import Button from "../button/Button";
function ProductCard({ e }) {
  return (
    <div className="card">
      <div className="image">
        <img src={e.url} alt={e.url} />
      </div>

      <div className="card-details">
        <h4 className="card-title" title={e.title.longTitle}>
          {e.title.shortTitle}
        </h4>
        <p>
          MRP <span id="mrp"> {e.price.mrp} </span>{" "}
        </p>
        <p>{e.price.cost}</p>
        <p>discount : {e.price.discount}</p>
        <Button elem={e} />
      </div>
    </div>
  );
}

export default ProductCard;
