import React from "react";
import "../Styles/Footer.css";
import footerimg from "../assets/Images/Footer-images/Group 10.png";

const Footer = () => {
  return (
    <div className="mainFooterContainer">
      <div className="leftFooterContainer">
        <input type="email" placeholder="Email Newsletter"></input>
        {/* <hr /> */}
        <h1>SLEEPY OWL</h1>
        <p>
          Our journey started with three friends with a shared vision. It was
          simple- introduce people to real good coffee.
        </p>
      </div>
      <div className="rightFooterContainer">
        <div className="socialButtons">
          <a
            className="socialslink"
            href="https://twitter.com/sleepyowlcoffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Twitter</button>
          </a>
          <a
            className="socialslink"
            href="https://www.instagram.com/sleepyowlcoffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Instagram</button>
          </a>
          <a
            className="socialslink"
            href="https://www.facebook.com/sleepyowlcoffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Facebook</button>
          </a>
          <a
            className="socialslink"
            href="https://www.youtube.com/channel/UCOC4AAvD10lxvVdnkFW51KQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Youtube</button>
          </a>
        </div>
        <div className="footerimg">
          <img src={footerimg} alt="footer-img" />
          <p>Made with love by</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
