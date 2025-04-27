import React, { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Images/navbar-images/sleepy-owl-Photoroom_1.png";
import search from "../assets/Images/navbar-images/search.png";
import cart from "../assets/Images/navbar-images/cart.png";
import { HashLink } from "react-router-hash-link";
import Hamburger from "hamburger-react";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const shopItemRef = useRef(null);
  const dropdownTl = useRef(null);

  useEffect(() => {
    if (!dropdownRef.current) return;

    // Get all dropdown columns for staggered animation
    const dropdownColumns = dropdownRef.current.querySelectorAll(
      ".column-1, .dropdown-products"
    );

    // Get all list items for more detailed animation
    const dropdownItems = dropdownRef.current.querySelectorAll("li");

    // Initialize the timeline
    dropdownTl.current = gsap
      .timeline({ paused: true })
      // First animate the container
      .fromTo(
        dropdownRef.current,
        {
          opacity: 0,
          y: -15,
          scale: 0.97,
          transformOrigin: "top center",
          display: "none",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          display: "flex",
        }
      )
      // Animate all columns simultaneously
      .fromTo(
        dropdownColumns,
        {
          opacity: 0,
          y: -10,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "back.out(1.2)",
          stagger: 0, // No stagger - all columns animate together
        },
        "-=0.25" // Start at the same time as the container animation
      )
      // Finally, animate the list items with a more pronounced stagger
      .fromTo(
        dropdownItems,
        {
          opacity: 0,
          y: -8,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          stagger: 0.015, // Faster stagger but still visible
          ease: "power2.out",
        },
        "-=0.2" // Start slightly after columns begin animating
      );

    // Setup event listeners for hover
    const shopItem = shopItemRef.current;

    const handleMouseEnter = () => {
      dropdownTl.current.play();
    };

    const handleMouseLeave = () => {
      dropdownTl.current.reverse();
    };

    if (shopItem) {
      shopItem.addEventListener("mouseenter", handleMouseEnter);
      shopItem.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup event listeners
    return () => {
      if (shopItem) {
        shopItem.removeEventListener("mouseenter", handleMouseEnter);
        shopItem.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "hidden";
  };

  return (
    <div className="navbarContainer">
      <div className="leftContainer">
        <ul>
          <li className="shop navbarTitle" ref={shopItemRef}>
            Shop
            <div className="dropdownContainer" ref={dropdownRef}>
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
