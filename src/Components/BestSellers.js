import React from "react";
import "../Styles/BestSellers.css";
import firstproduct from "../assets/Images/eleventh.png";
import secondproduct from "../assets/Images/fourth.png";
import thirdproduct from "../assets/Images/tenth.png";

const BestSellers = () => {
  return (
    <div className="mainContainer">
      <div className="titles">
        <div className="coffee-types">
          <h3>Instant Coffee</h3>
          <h3>Cold Brew</h3>
          <h3>Hot Brew</h3>
        </div>
        <div className="bestseller">
          <p>
            <strong>BestSellers.</strong>
          </p>
        </div>
      </div>
      <div className="productsContainer">
        <div className="product">
          <img src={firstproduct} alt="First Product" />
          <h2>French Vanilla Instant Coffee</h2>
          <p>
            Made with 100% Arabica solube crystals, get perfect & super
            delicious coffee in seconds
          </p>
          <div className="priceAndAdd">
            <h1>
              ₹550<span className="paise">.00</span>
            </h1>
            <h5>
              <u>+ADD</u>
            </h5>
          </div>
        </div>
        <div className="product">
          <img src={secondproduct} alt="Second Product" />
          <h2>Premium Combo</h2>
          <p>
            Made with 100% Arabica solube crystals, get perfect & super
            delicious coffee in seconds
          </p>
          <div className="priceAndAdd">
            <h1>
              ₹1599<span className="paise">.00</span>
            </h1>
            <h5>
              <u>+ADD</u>
            </h5>
          </div>
        </div>
        <div className="product">
          <img src={thirdproduct} alt="third Product" />
          <h2>Original Instant Coffee</h2>
          <p>
            Made with 100% Arabica solube crystals, get perfect & super
            delicious coffee in seconds
          </p>
          <div className="priceAndAdd">
            <h1>
              ₹550<span className="paise">.00</span>
            </h1>
            <h5>
              <u>+ADD</u>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
