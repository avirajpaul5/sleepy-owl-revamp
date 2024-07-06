import React from "react";
import "../Styles/Footer.css";
import vector from "../assets/Images/Footer-images/Vector.png";
import footerimg from "../assets/Images/Footer-images/Group 10.png";
const Footer = () => {
  return (
    <>
      <div className="mainFooterContainer">
        <div className="leftFooterContainer">
          <h3>Email Newsletter</h3>
          <hr></hr>
          <h1>SLEEPY OWL</h1>
          <p>Our journey started with three friends with a shared vision. It was simple- introduce people to real good coffee.</p>
        </div>
        <div className="rightFooterContainer">
          <div className="socialButtons">
            <button>Twitter</button>
            <button>Instagram</button>
            <button>Facebook</button>
            <button>LinkedIn</button>
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