import React from 'react'
import "../Styles/Footer.css"
import logo from "../assets/Images/navbar-images/sleepy-owl-Photoroom_1.png";
import LoveLogo from "../assets/Images/Footer-images/Group 10.png";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="left">
          <div className="upper">
            <div className="col">
              <ul>
                <li className="itemHeader">Coffee</li>
                <li className="item">Incredible Deal</li>
                <li className="item">Premium Instant</li>
                <li className="item">Cold Brew</li>
                <li className="item">5-Minute Bag</li>
                <li className="item">Arabica Beans</li>
                <li className="item">Ready to Drink</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="itemHeader">Sleepy Owl</li>
                <li className="item">Reviews</li>
                <li className="item">About Us</li>
                <li className="item">Sustain Pack</li>
                <li className="item">Return</li>
                <li className="item">Contact-us</li>
                <li className="item">Terms of Use</li>
                <li className="item">Compliance</li>
                <li className="item">Blog</li>
                <li className="item">Sitemap</li>
              </ul>
            </div>

          </div>
          <div className="lower">
            <img src={logo} alt="logo" className="logo"></img>
          </div>

        </div>
        <div className="right">
          <div className="rightupper">
            <h1 className='rightText'>Our journey started with three friends with a shared vision. It was simple- introduce people to real good coffee. Today, we’re making high-quality, freshly roasted coffee accessible to everyone with our exclusive products.</h1>
          </div>
          <div className="rightmiddle">
            <div className="search-box">
              <input type="text" placeholder="Enter Email"></input>
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
          <div className="rightbottom">
            <p className='loveMsg'>Made with love</p>
            <img src={LoveLogo} alt="love-logo" className="love-logo"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer