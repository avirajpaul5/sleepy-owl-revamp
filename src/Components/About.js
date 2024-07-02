import React from "react";
import "../Styles/About.css";
import coffee3 from "../assets/Images/about-images/coffee beans about right.png";

const About = () => {
  return (
    <>
      <div className="aboutPara">
        <p>
          "Sleepy Owl is a homegrown Indian coffee brand. We spend inordinately
          long making coffee that is as good as it can be in every single cup."
        </p>
      </div>
      <img className="coffee3" src={coffee3} alt="coffee beans image"></img>
    </>
  );
};

export default About;
