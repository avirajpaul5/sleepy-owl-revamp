import React, { useState, useEffect } from "react";
import "../Styles/BestSellers.css";
import firstproduct from "../assets/Images/eleventh.png";
import secondproduct from "../assets/Images/fourth.png";
import thirdproduct from "../assets/Images/tenth.png";
import coldBrew1 from "../assets/Images/coldBrew1.png";
import coldBrew2 from "../assets/Images/coldBrew2.png";
import coldBrew3 from "../assets/Images/coldBrew3.png";
import hotBrew1 from "../assets/Images/hotBrew1.png";
import hotBrew2 from "../assets/Images/hotBrew2.png";
import hotBrew3 from "../assets/Images/hotBrew3.png";

import { Link } from "react-router-dom";

const BestSellers = () => {
  const [activeProduct, setActiveProduct] = useState("instant-coffee");
  const [fadeOut, setFadeOut] = useState(false);

  // Handle smooth transition between categories
  const handleCategoryChange = (category) => {
    if (category === activeProduct) return;

    setFadeOut(true);
    setTimeout(() => {
      setActiveProduct(category);
      setFadeOut(false);
    }, 300);
  };

  const products = {
    "instant-coffee": [
      {
        img: firstproduct,
        title: "French Vanilla Instant Coffee",
        description:
          "Made with 100% Arabica soluble crystals, get perfect & super delicious coffee in seconds",
        price: "₹550",
      },
      {
        img: secondproduct,
        title: "Premium Combo",
        description:
          "Made with 100% Arabica soluble crystals, get perfect & super delicious coffee in seconds",
        price: "₹1599",
      },
      {
        img: thirdproduct,
        title: "Original Instant Coffee",
        description:
          "Made with 100% Arabica soluble crystals, get perfect & super delicious coffee in seconds",
        price: "₹550",
      },
    ],
    "cold-brew": [
      {
        img: coldBrew1,
        title: "Original Blend",
        description:
          "Our original 100% Arabica Coffee made to be brewed overnight.",
        price: "₹600",
      },
      {
        img: coldBrew2,
        title: "French Vanilla Cold Brew",
        description: "A hint of natural sweetness that comes from Vanilla",
        price: "₹600",
      },
      {
        img: coldBrew3,
        title: "Hazelnut",
        description:
          "Our Signature 100% Arabica with nutty Hazelnut flavour - our personal favourite!",
        price: "₹600",
      },
    ],
    "hot-brew": [
      {
        img: hotBrew1,
        title: "Set of 30 Hot Brew",
        description:
          "Enjoy all our flavours in our effortless Hot Brew bags. The perfect gift box for every coffee lover.",
        price: "₹1200",
      },
      {
        img: hotBrew2,
        title: "Assorted Hot Brew",
        description:
          "A collection of our most loved 100% Arabica with nutty Hazelnut flavour",
        price: "₹400",
      },
      {
        img: hotBrew3,
        title: "Original",
        description:
          "100% Arabica Coffee. A well balanced coffee bag that's ready in 5 minutes. Just add hot water.",
        price: "₹400",
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
            onClick={() => handleCategoryChange("instant-coffee")}
          >
            Instant Coffee
          </button>
          <button
            className={`coffee-btn ${
              activeProduct === "cold-brew" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("cold-brew")}
          >
            Cold Brew
          </button>
          <button
            className={`coffee-btn ${
              activeProduct === "hot-brew" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("hot-brew")}
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
          style={{
            display: activeProduct === key ? "flex" : "none",
            opacity: fadeOut ? 0 : 1,
          }}
        >
          {products[key].map((product, index) => (
            <Link
              // to="/product-page"
              style={{ textDecoration: "none", color: "#e0e0e0" }}
              key={index}
            >
              <div className="product">
                <div className="product-image-container">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="priceAndAdd">
                  <h1>
                    {product.price}
                    <span style={{ color: "#A2A2A2", fontSize: "20px" }}>
                      .00
                    </span>
                  </h1>
                  <button className="add-button">+ ADD</button>
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
