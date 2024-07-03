import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../Styles/Merch.css";

const Merch = () => {
  const imageRefs = useRef([]);
  imageRefs.current = [];

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    imageRefs.current.forEach((ref, index) => {
      timeline
        .to(
          ref,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "circ.out",
            rotation: index % 2 === 0 ? -10 : 10,
            loop : true,
          },
          index * 1.5
        ) // Stagger the start times
        .to(
          ref,
          {
            rotation: index % 2 === 0 ? -10 : 10,
            duration: 1,
            ease: "circ.in",
            loop : true,

          },
          (index + 2) * 1.5
        ); // Ensure the image stays visible for two steps
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div className="image-container">
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_1.png?v=1630526867"
        alt="Image 1"
        className="Merchimage image1"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_2.png?v=1630526888"
        alt="Image 2"
        className="Merchimage image2"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_3.png?v=1630526907"
        alt="Image 3"
        className="Merchimage image3"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_4.png?v=1630526926"
        alt="Image 4"
        className="Merchimage image4"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_1.png?v=1630526867"
        alt="Image 5"
        className="Merchimage image1"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_2.png?v=1630526888"
        alt="Image 6"
        className="Merchimage image2"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_3.png?v=1630526907"
        alt="Image 7"
        className="Merchimage image3"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_4.png?v=1630526926"
        alt="Image 8"
        className="Merchimage image4"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_1.png?v=1630526867"
        alt="Image 9"
        className="Merchimage image1"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_2.png?v=1630526888"
        alt="Image 10"
        className="Merchimage image2"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_3.png?v=1630526907"
        alt="Image 11"
        className="Merchimage image3"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_4.png?v=1630526926"
        alt="Image 12"
        className="Merchimage image4"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_1.png?v=1630526867"
        alt="Image 13"
        className="Merchimage image1"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_2.png?v=1630526888"
        alt="Image 14"
        className="Merchimage image2"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_3.png?v=1630526907"
        alt="Image 15"
        className="Merchimage image3"
        ref={addToRefs}
      />
      <img
        src="https://sleepyowl.co/cdn/shop/files/shop_4.png?v=1630526926"
        alt="Image 16"
        className="Merchimage image4"
        ref={addToRefs}
      />
    </div>
  );
};

export default Merch;
