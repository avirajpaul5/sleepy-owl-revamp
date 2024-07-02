import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Recog from "./Components/Recog";
import About from "./Components/About";
import BestSellers from "./Components/BestSellers";
import Products from "./Components/Products";
import Merch from "./Components/Merch";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";

const App = () => {
  return (
    // Smooth Scrolling (Don't Touch)
    <ReactLenis root>
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
        <Footer />
      </div>
    </ReactLenis>
    // Smooth Scrolling (Don't Touch)
  );
};

export default App;
