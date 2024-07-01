import React, { useState } from "react";
import "../Styles/BestSellers.css";
import firstproduct from "../assets/Images/eleventh.png";
import secondproduct from "../assets/Images/fourth.png";
import thirdproduct from "../assets/Images/tenth.png";
import blur2 from "../assets/Images/blur.png";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [activeProduct, setActiveProduct] = useState("instant-coffee");

  const products = {
    "instant-coffee": [
      {
        img: firstproduct,
        title: "French Vanilla Instant Coffee",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹550.00",
      },
      {
        img: secondproduct,
        title: "Premium Combo",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹1599.00",
      },
      {
        img: thirdproduct,
        title: "Original Instant Coffee",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹550.00",
      },
    ],
    "cold-brew": [
      {
        img: thirdproduct,
        title: "French Vanilla Instant Coffee",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹550.00",
      },
      {
        img: secondproduct,
        title: "Premium Combo",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹1599.00",
      },
      {
        img: firstproduct,
        title: "Original Instant Coffee",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹550.00",
      },
    ],
    "hot-brew": [
      {
        img: firstproduct,
        title: "French Vanilla Instant Coffee",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹550.00",
      },
      {
        img: secondproduct,
        title: "Premium Combo",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹1599.00",
      },
      {
        img: thirdproduct,
        title: "Original Instant Coffee",
        description:
          "Made with 100% Arabica solube crystals, get perfect & super delicious coffee in seconds",
        price: "₹550.00",
      },
    ],
  };

  return (
    <div className="mainBestSellerContainer" id="mainBestSellerContainer">
      <div className="titles">
        <div className="coffee-types">
          <button
            className={`coffee-btn ${
              activeProduct === "instant-coffee" ? "active" : ""
            }`}
            onClick={() => setActiveProduct("instant-coffee")}
          >
            Instant Coffee
          </button>
          <button
            className={`coffee-btn ${
              activeProduct === "cold-brew" ? "active" : ""
            }`}
            onClick={() => setActiveProduct("cold-brew")}
          >
            Cold Brew
          </button>
          <button
            className={`coffee-btn ${
              activeProduct === "hot-brew" ? "active" : ""
            }`}
            onClick={() => setActiveProduct("hot-brew")}
          >
            Hot Brew
          </button>
        </div>
        <div className="bestseller">
          <p>
            <strong>BestSellers.</strong>
          </p>
        </div>
      </div>
      {Object.keys(products).map((key) => (
        <div
          key={key}
          className="productsContainer"
          id={key}
          style={{ display: activeProduct === key ? "flex" : "none" }}
        >
          {products[key].map((product, index) => (
            <Link
              to="/product-page"
              style={{ textDecoration: "none", color: "#e0e0e0" }}
              key={index}
            >
              <div className="product">
                <img src={product.img} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="priceAndAdd">
                  <h1>{product.price}</h1>
                  <h5>
                    <u>+ADD</u>
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BestSellers;
