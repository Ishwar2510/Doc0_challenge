import React from "react";
import { useSelector, useDisptach } from "react-redux";
import ProductCard from "./cards/ProductCard";

function Product() {
  const products = useSelector((store) => {
    return store.products;
  });

  return (
    <div className="productContainer">
      {products.map((e) => {
        return <ProductCard key={e.id} e={e} />;
      })}
    </div>
  );
}

export default Product;
