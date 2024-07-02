import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../Styles/Hero.css";

// Import 9 different images
import Img1 from "../assets/Images/first.png";
import Img2 from "../assets/Images/second.png";
import Img3 from "../assets/Images/third.png";
import Img4 from "../assets/Images/fourth.png";
import Img5 from "../assets/Images/fifth.png";
import Img6 from "../assets/Images/sixth.png";
import Img7 from "../assets/Images/seventh.png";
import Img8 from "../assets/Images/eightth.png";
import Img9 from "../assets/Images/ninth.png";
import coffee1 from "../assets/Images/hero-images/coffee beans top right hero.png";
import coffee2 from "../assets/Images/hero-images/coffee beans left hero.png";

const Hero = () => {
  const cursorRef = useRef(null);
  const cursorMediasRef = useRef([]);
  const textSpansRef = useRef([]);

  useEffect(() => {
    gsap.from(".heroContainer", {
      duration: 2.5,
      ease: "power4",
      y: 100,
      opacity: 0,
      delay: 0.5,
      stagger: 0.3,
    });

    gsap.set(cursorRef.current, {
      xPercent: 0,
      yPercent: 1.5,
      scale: 1,
    });

    const setCursorX = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "expo",
    });

    const setCursorY = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "expo",
    });

    const handleMouseMove = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "expo.inOut",
    });

    textSpansRef.current.forEach((textSpan, i) => {
      textSpan.addEventListener("mouseover", () => {
        cursorMediasRef.current.forEach((media, index) => {
          if (index === i) {
            media.classList.add("active");
          } else {
            media.classList.remove("active");
          }
        });
        tl.play();
      });

      textSpan.addEventListener("mouseout", () => {
        tl.reverse();
        cursorMediasRef.current[i].classList.remove("active");
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        {[
          Img1,
          Img2,
          Img3,
          Img4,
          Img5,
          Img6,
          Img7,
          Img8,
          Img9,
          Img1,
          Img4,
          Img5,
        ].map((imgSrc, i) => (
          <img
            key={i}
            src={imgSrc}
            alt={`Cursor ${i}`}
            ref={(el) => (cursorMediasRef.current[i] = el)}
          />
        ))}
      </div>
      <div className="heroContainer">
        {["S", "L", "E", "E", "P", "Y", " ", " ", " ", "O", "W", "L"].map(
          (char, i) => (
            <span
              key={i}
              className="textSpan"
              ref={(el) => (textSpansRef.current[i] = el)}
            >
              {char}
            </span>
          )
        )}
      </div>
      <div className="shopButtonsContainer">
        <p style={{ textDecoration: "underline" }}>Shop Now</p>
        <p>Scroll Down </p>
      </div>
      <img className="coffee1" src={coffee1} alt="coffee beans image"></img>
      <img className="coffee2" src={coffee2} alt="coffee beans image"></img>    </>
  );
};

export default Hero;
