import React from "react";
import "../Styles/Recog.css";

import Img1 from "../assets/Images/RecognisedImages/Forbes.png";
import Img2 from "../assets/Images/RecognisedImages/TOI.png";
import Img3 from "../assets/Images/RecognisedImages/Bloomberg.png";
import Img4 from "../assets/Images/RecognisedImages/GQ.png";

const Recog = () => {
  return (
    <>
      <div className="RecognisedContainer">
        <p>Recognised By</p>
      </div>
      <div className="RecognisedImages">
        <img className="Brand1" src={Img1} alt="Forbes" />
        <img className="Brand2" src={Img2} alt="Toi" />
        <img className="Brand3" src={Img3} alt="Bloomberg" />
        <img className="Brand4" src={Img4} alt="GQ" />
      </div>
    </>
  );
};

export default Recog;
