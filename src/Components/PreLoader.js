import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Styles/PreLoader.css";
import logo from "../assets/Images/navbar-images/sleepy-owl-Photoroom_1.png";

const PreLoader = ({ setLoading }) => {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation - logo appears with a slight bounce
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
    )
      // Animate the coffee circle around the logo
      .fromTo(
        circleRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      )
      // Pulse the logo slightly
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.8,
        repeat: 1,
        yoyo: true,
        ease: "power1.inOut",
      })
      // Fade out the circle
      .to(
        circleRef.current,
        {
          opacity: 0,
          scale: 1.2,
          duration: 0.5,
          ease: "power1.in",
        },
        "-=0.3"
      )
      // Overlay slides out
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Set loading to false when animation completes
          setLoading(false);
        },
      });

    return () => {
      // Cleanup
      tl.kill();
    };
  }, [setLoading]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-overlay" ref={overlayRef}>
        <div className="logo-container">
          <div className="coffee-circle" ref={circleRef}>
            <div className="coffee-circle-inner"></div>
          </div>
          <img
            ref={logoRef}
            src={logo}
            alt="Sleepy Owl Logo"
            className="preloader-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
