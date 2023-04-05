import React from "react";
import { v4 as uuidv4 } from "uuid";
import green_check from "../staticData/green-check-icon.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch({ type: "clear" });
  return (
    <div id="successsContainer">
      <div>
        <img src={green_check}></img>
      </div>
      <div>
        <p style={{ color: "grey" }}>Order id : {uuidv4()}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Order More{" "}
        </button>
      </div>
    </div>
  );
}

export default Success;
