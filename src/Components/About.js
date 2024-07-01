import React from "react";
import "../Styles/About.css";
import blur1 from "../assets/Images/blur.png";

const About = () => {
  return (
    <>
      <div className="aboutPara">
        <p>
          "Sleepy Owl is a homegrown Indian coffee brand. We spend inordinately
          long making coffee that is as good as it can be in every single cup."
        </p>
      </div>
      <img className="blur1" src={blur1} alt="blur background"></img>
    </>
  );
};

export default About;
