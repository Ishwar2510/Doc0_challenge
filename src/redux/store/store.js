import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products";
import cartData from "../reducers/cart";

const store = configureStore({
  reducer: {
    products: products,
    cartData: cartData,
  },
});
export default store;
