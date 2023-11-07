import React from "react";
import "../styles/header.css"

const Header = () => {
  return(
    <>
    <div id="header">
        <div id="nav">
            <ul>
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item">Contact</li>
            </ul>
        </div>
    </div>
    </>
  );
};

export default Header;
