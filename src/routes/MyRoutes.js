import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../Pages/ProductPage.js";
import SuccessPage from "../Pages/SuccessPage.js";
import OrderPage from "../Pages/OrderPage.js";
function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />}></Route>
      <Route path="/success" element={<SuccessPage />}></Route>
      <Route path="/order" element={<OrderPage />}></Route>
    </Routes>
  );
}

export default MyRoutes;
