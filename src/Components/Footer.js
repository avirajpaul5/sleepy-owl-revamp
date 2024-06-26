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
            <div class="col">
              <ul>
                <li class="itemHeader">Coffee</li>
                <li class="item">Incredible Deal</li>
                <li class="item">Premium Instant</li>
                <li class="item">Cold Brew</li>
                <li class="item">5-Minute Bag</li>
                <li class="item">Arabica Beans</li>
                <li class="item">Ready to Drink</li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li class="itemHeader">Sleepy Owl</li>
                <li class="item">Reviews</li>
                <li class="item">About Us</li>
                <li class="item">Sustain Pack</li>
                <li class="item">Return</li>
                <li class="item">Contact-us</li>
                <li class="item">Terms of Use</li>
                <li class="item">Compliance</li>
                <li class="item">Blog</li>
                <li class="item">Sitemap</li>
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