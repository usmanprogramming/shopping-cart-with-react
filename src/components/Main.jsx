import React, { useState } from "react";
import "../styles/main.css";

const Main = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div id="container">
        <div id="cart">
          <div className="button-div">
            <button
              onClick={() => {
                setValue(value + 1);
              }}
            >
              +
            </button>
          </div>
          <div id="display">
            <span id="number">{value}</span>
          </div>
          <div className="button-div">
            <button
              onClick={() => {
                if (value === 0) {
                  setValue(0);
                } else {
                  setValue(value - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
