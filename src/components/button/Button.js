import React, { useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./button.css";

function Button({ elem }) {
  const cart = useSelector((state) => state.cartData);

  const dispatch = useDispatch();
  let index = cart.findIndex((e) => e.id === elem.id);
  let qty = 0;
  if (index >= 0) {
    qty = cart[index].quantity;
  }
  function addButtonHandler(elem) {
    dispatch({ type: "addToCart", payload: elem });
  }
  function rmvButtonHandler(elem) {
    dispatch({ type: "removeFromCart", payload: elem });
  }
  return (
    <>
      {index >= 0 ? (
        <div className="addToCartBtn2">
          <button
            onClick={() => {
              rmvButtonHandler(elem);
            }}
          >
            -
          </button>
          <input value={qty} onChange={() => {}}></input>
          <button
            onClick={() => {
              addButtonHandler(elem);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            addButtonHandler(elem);
          }}
          className="addToCartBtn"
        >
          Add Item
        </button>
      )}
    </>
  );
}

export default Button;
