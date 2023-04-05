import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const cart = useSelector((state) => {
    return state.cartData;
  });
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let amt = 0;
    cart.forEach((elem) => {
      amt += elem.quantity * elem.price.cost;
    });
    setAmount(amt);
  }, [cart]);
  return (
    cart.length > 0 && (
      <div id="footer">
        <div id="amt">
          {" "}
          <p>Total Amount:</p>
          <p>{amount}</p>
        </div>
        <button
          id="orderbtn"
          onClick={() => {
            navigate("/success");
          }}
        >
          Place Order
        </button>
      </div>
    )
  );
}

export default Footer;
