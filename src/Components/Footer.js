import React from "react";
import "../Styles/Footer.css";
import footerimg from "../assets/Images/Footer-images/Group 10.png";

const Footer = () => {
  return (
    <>
      <div className="mainFooterContainer">
        <div className="leftFooterContainer">
          <h3>Email Newsletter</h3>
          <hr></hr>
          <h1>SLEEPY OWL</h1>
          <p>
            Our journey started with three friends with a shared vision. It was
            simple- introduce people to real good coffee.
          </p>
        </div>
        <div className="rightFooterContainer">
          <div className="socialButtons">
            <div className="firstTwoBtn">
              <a
                className="socialslink"
                href="https://twitter.com/sleepyowlcoffee"
                target="_blank"
              >
                <button>Twitter</button>
              </a>
              <a
                className="socialslink"
                href="https://www.instagram.com/sleepyowlcoffee"
                target="_blank"
              >
                <button>Instagram</button>
              </a>
            </div>
            <div className="secondTwoBtn">
              <a
                className="socialslink"
                href="https://www.facebook.com/sleepyowlcoffee"
                target="_blank"
              >
                <button>Facebook</button>
              </a>
              <a
                className="socialslink"
                href="https://www.youtube.com/channel/UCOC4AAvD10lxvVdnkFW51KQ"
                target="_blank"
              >
                <button>Youtube</button>
              </a>
            </div>
          </div>
          <div className="footerimg">
            <img src={footerimg} alt="footer-img"></img>
            <p>Made with love by</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
