import React from "react";
import { useEffect, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../header.css";
function Header() {
  const cart = useSelector((state) => {
    return state.cartData;
  });
  const [items, setItems] = useState(0);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setItems(cart.length);
    let amt = 0;
    cart.forEach((elem) => {
      amt += elem.quantity * elem.price.cost;
    });
    setAmount(amt);
  }, [cart]);
  return (
    <div className="header">
      <div id="cart">
        {items}
        <Link className="link" to="/order">
          {" "}
          <p>
            <BiCartAlt style={{ color: "white" }} />{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
