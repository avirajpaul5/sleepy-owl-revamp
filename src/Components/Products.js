import React, { useState, useEffect } from "react";
import img1 from "../assets/Images/first.png";
import img2 from "../assets/Images/second.png";
import img3 from "../assets/Images/third.png";
import img4 from "../assets/Images/fourth.png";
import img5 from "../assets/Images/fifth.png";
import img6 from "../assets/Images/sixth.png";
import img7 from "../assets/Images/seventh.png";
import img8 from "../assets/Images/eightth.png";
import img9 from "../assets/Images/first.png";
import img10 from "../assets/Images/second.png";
import "../Styles/Products.css";

const App = () => {
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const nextPercentageUnconstrained =
      prevPercentage - (mouseDelta / maxDelta) * 100;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 30), //changed from 10 to 30
      -90
    );

    setPercentage(nextPercentage);

    const track = document.getElementById("image-track");
    if (track) {
      track.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = track.getElementsByClassName("image");
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    }

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <div className="p">
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        onMouseDown={handleOnDown}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onMouseUp={handleOnUp}
        onTouchEnd={(e) => handleOnUp(e.touches[0])}
        onMouseMove={handleOnMove}
        a
        onTouchMove={(e) => handleOnMove(e.touches[0])}
      >
        {/* all the images have hyperlinks and for now they're directed to yt. intend to direct it to sleepy owl's original product page */}
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img1} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img2} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img3} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img4} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img5} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img6} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img7} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img8} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img10} />
        </a>
        <a className="link" href="" draggable="false">
          <img className="image" draggable="false" src={img9} />
        </a>
      </div>
    </div>
  );
};

export default App;
