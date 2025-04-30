// Imports React and image assets
import React, { useState, useEffect, useRef } from "react";
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

// Main component (named App but exported as default)
const App = () => {
  // Refs for DOM elements
  const trackRef = useRef(null);
  const dragMessageRef = useRef(null);

  // State for tracking drag position and percentages
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showDragMessage, setShowDragMessage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Event handlers for mouse/touch interactions
  const handleOnDown = (e) => {
    // Get clientX from either mouse or touch event
    const clientX =
      e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY =
      e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    setMouseDownAt(clientX);
    setIsDragging(true);
    setShowDragMessage(false); // Hide drag message when dragging starts
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleOnUp = () => {
    setIsDragging(false);
    setPrevPercentage(percentage);
    setMouseDownAt(0);

    // Show drag message again after dragging ends if mouse is still over the track
    const trackElement = trackRef.current;
    if (trackElement) {
      const trackRect = trackElement.getBoundingClientRect();
      if (
        mousePosition.x >= trackRect.left &&
        mousePosition.x <= trackRect.right &&
        mousePosition.y >= trackRect.top &&
        mousePosition.y <= trackRect.bottom
      ) {
        setShowDragMessage(true);
      }
    }
  };

  const handleOnMove = (e) => {
    // Get clientX from either mouse or touch event
    const clientX =
      e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY =
      e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    setMousePosition({ x: clientX, y: clientY });

    // Update drag message position
    if (dragMessageRef.current && showDragMessage) {
      dragMessageRef.current.style.left = `${clientX}px`;
      dragMessageRef.current.style.top = `${clientY}px`;
    }

    if (!isDragging) {
      // Check if mouse is over the track
      const trackElement = trackRef.current;
      if (trackElement) {
        const trackRect = trackElement.getBoundingClientRect();
        if (
          clientX >= trackRect.left &&
          clientX <= trackRect.right &&
          clientY >= trackRect.top &&
          clientY <= trackRect.bottom
        ) {
          setShowDragMessage(true);
        } else {
          setShowDragMessage(false);
        }
      }
      return;
    }

    // If no valid clientX or no mouseDownAt value, return early
    if (!clientX || mouseDownAt === 0) return;

    const mouseDelta = parseFloat(mouseDownAt) - clientX;
    const maxDelta = window.innerWidth / 2;

    const nextPercentageUnconstrained =
      prevPercentage - (mouseDelta / maxDelta) * 100;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 10),
      -90
    );

    setPercentage(nextPercentage);

    // Apply animations only if we have a valid track reference
    if (trackRef.current) {
      // Use a single animation approach for consistency
      trackRef.current.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 800, fill: "forwards", easing: "ease-out" }
      );

      // Apply the style directly as well for browsers that might not support animate
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

      // Update all images
      const images = trackRef.current.getElementsByClassName("image");
      for (const image of images) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 800, fill: "forwards", easing: "ease-out" }
        );

        // Apply the style directly as well
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    }
  };

  // Set up event listeners with useEffect for proper cleanup
  useEffect(() => {
    const handleMouseDown = (e) => handleOnDown(e);
    const handleTouchStart = (e) => handleOnDown(e);
    const handleMouseUp = () => handleOnUp();
    const handleTouchEnd = () => handleOnUp();
    const handleMouseMove = (e) => handleOnMove(e);
    const handleTouchMove = (e) => handleOnMove(e);

    // Add event listeners
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [
    percentage,
    prevPercentage,
    mouseDownAt,
    isDragging,
    showDragMessage,
    mousePosition,
  ]);

  // Initialize track position on first render
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate(${percentage}%, -50%)`;

      const images = trackRef.current.getElementsByClassName("image");
      for (const image of images) {
        image.style.objectPosition = `${100 + percentage}% center`;
      }
    }
  }, []);

  return (
    <div className="p">
      <div className="Products">
        <p>
          <strong>Products.</strong>
        </p>
      </div>
      <div
        id="image-track"
        ref={trackRef}
        className={isDragging ? "dragging" : ""}
      >
        {/* Multiple images displayed in the track */}
        <img className="image" draggable="false" src={img1} alt="Product 1" />
        <img className="image" draggable="false" src={img2} alt="Product 2" />
        <img className="image" draggable="false" src={img3} alt="Product 3" />
        <img className="image" draggable="false" src={img4} alt="Product 4" />
        <img className="image" draggable="false" src={img5} alt="Product 5" />
        <img className="image" draggable="false" src={img6} alt="Product 6" />
        <img className="image" draggable="false" src={img7} alt="Product 7" />
        <img className="image" draggable="false" src={img8} alt="Product 8" />
        <img className="image" draggable="false" src={img10} alt="Product 9" />
        <img className="image" draggable="false" src={img9} alt="Product 10" />
      </div>
      {showDragMessage && (
        <div
          className="drag-cursor"
          ref={dragMessageRef}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div className="drag-ring">
            <svg viewBox="0 0 100 100" className="ring-svg">
              <defs>
                <path
                  id="textPath"
                  d="M 50,50 m 0,-40 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80"
                  fill="none"
                />
              </defs>
              <path stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <text className="ring-text">
                <textPath href="#textPath" startOffset="0%">
                  DRAG ○ DRAG ○ DRAG ○ DRAG ○ DRAG ○ DRAG ○ DRAG ○
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
