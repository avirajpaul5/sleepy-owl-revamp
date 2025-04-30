import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Recog from "./Components/Recog";
import About from "./Components/About";
import BestSellers from "./Components/BestSellers";
import Products from "./Components/Products";
import Merch from "./Components/Merch";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import PreLoader from "./Components/PreLoader";
import "./Styles/App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling when preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden"; // Explicitly set overflow-x to hidden
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden"; // Keep overflow-x hidden even after loading
    }
  }, [loading]);

  return (
    <>
      {loading && <PreLoader setLoading={setLoading} />}

      {/* Smooth Scrolling (Don't Touch) */}
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          lerp: 0.1,
          wheelMultiplier: 0.8,
          gestureOrientation: "vertical",
        }}
        className="lenis-container"
      >
        <div className="container">
          <Navbar />
          <Hero />
          {/* Add components here ⬇️ */}
          <Recog />
          <About />
          <BestSellers />
          <Products />
          <Merch />
          {/* <Reviews/> */}
        </div>
        {/* Footer outside container for full width */}
        <Footer />
      </ReactLenis>
      {/* Smooth Scrolling (Don't Touch) */}
    </>
  );
};

export default App;
