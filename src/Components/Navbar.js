import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Images/navbar-images/sleepy-owl-Photoroom_1.png";
import search from "../assets/Images/navbar-images/search.png";
import cart from "../assets/Images/navbar-images/cart.png";
import { HashLink } from "react-router-hash-link";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  return (
    <div className="navbarContainer">
      <div className="leftContainer">
        <ul>
          <li className="shop navbarTitle">
            Shop
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
          <li className="navbarTitle">Instant Coffee</li>
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
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="rightContainer">
        <ul>
          <li className="bulk-orders navbarTitle">BulkOrders</li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search-icon" />
        </div>
        <div className="cart-div">
          <img src={cart} alt="cart-icon" className="cart-icon" />
        </div>
        <div className="menuContainer">
          <Hamburger toggled={menuOpen} toggle={toggleMenu} />
          {menuOpen && (
            <div className="menu">
              <ul>
                <li>Shop</li>
                <li>Instant Coffee</li>
                <li>BestSellers</li>
                <li>BulkOrders</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;