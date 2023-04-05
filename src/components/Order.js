import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./cards/ProductCard";
import { AiOutlineDelete } from "react-icons/ai";
import empty from "../staticData/EmptyCart.png";
import Footer from "./Footer.js";
import { useMatch, useNavigate } from "react-router-dom";

function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => {
    return state.cartData;
  });
  function deleteHandler(elem) {
    if (window.confirm("Delete The Item")) {
      dispatch({ type: "deleteItem", payload: elem });
    }
  }
  return (
    <div id="orderContainer">
      {cart.length == 0 ? (
        <div>
          <img
            src={empty}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
      ) : (
        cart.map((e) => {
          return (
            <>
              <div className="cartContainer">
                <ProductCard key={e.id} e={e} />
                <AiOutlineDelete
                  className="deleteBtn"
                  onClick={() => {
                    deleteHandler(e);
                  }}
                />
              </div>
            </>
          );
        })
      )}
      {cart.length > 0 && <Footer />}
    </div>
  );
}

export default Order;
