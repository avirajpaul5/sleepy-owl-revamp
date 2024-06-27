import React from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Images/navbar-images/sleepy-owl-Photoroom_1.png";
import search from "../assets/Images/navbar-images/search.png";
import cart from "../assets/Images/navbar-images/cart.png";
import arrow from "../assets/Images/navbar-images/sort-down.png";
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="leftContainer">
        <ul>
          <li className="shop navbarTitle">
            Shop<img src={arrow} className="arrow"></img>
            <div className="dropdownContainer">
              <div className="column-1">
                <ul>
                  <li id="login">Login / Signup</li>
                  <li>Bulk Orders</li>
                  <li>Blog</li>
                  <li>About-us</li>
                  <li>Reviews</li>
                  <li>Contact-us</li>
                </ul>
              </div>
              <div className="dropdown-products">
                <ul>
                  <li>Enamel Mug Combo</li>
                  <li className="description">Blink and you'll never miss</li>
                  <li>Premium Instant Coffee</li>
                  <li className="description">Blink and you'll never miss</li>
                  <li>Xpresso: Instant Coffee</li>
                  <li className="description">Warning: strong coffee</li>
                </ul>
              </div>
              <div className="dropdown-products">
                <ul>
                  <li>Cold Brew</li>
                  <li className="description">Brew Overnight</li>
                  <li>Ground Coffee</li>
                  <li className="description">Arabica beans</li>
                  <li>Cold Coffee</li>
                  <li className="description">kick off the summer right</li>
                </ul>
              </div>
              <div className="dropdown-products">
                <ul>
                  <li>Coffee Bags</li>
                  <li className="description">Blink and you'll never miss</li>
                  <li>Merchandise</li>
                  <li className="description">Perfect companion</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbarTitle">
            Instant Coffee<img src={arrow} className="arrow"></img>
          </li>
          <HashLink
            smooth
            to="/#mainBestSellerContainer"
            style={{ textDecoration: "none", color: "#e0e0e0" }}
          >
            <li className="navbarTitle">BestSellers</li>
          </HashLink>
        </ul>
      </div>
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="rightContainer">
        <ul>
          <li className="bulk-orders navbarTitle">BulkOrders</li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search"></input>
          <img src={search} alt="search-icon"></img>
        </div>
        <div className="cart-div">
          <img src={cart} alt="cart-icon" className="cart-icon"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
