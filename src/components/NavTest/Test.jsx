import React from "react";
import "./Test.css";

function Test() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="#">Women</a>
        <a href="#">Men</a>
      </div>
      <div className="navbar__center">
        <a href="#">Precision</a>
      </div>
      <div className="navbar__right">
        <a href="#">My account</a>
        <div className="navbar__icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Test;
