import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const App = () => {
  return (
    // Smooth Scrolling (Don't Touch)
    <ReactLenis root>
      <div className="container">
        <Navbar />
        <Hero />
        {/* Add components here ⬇️ */}

        
      </div>
    </ReactLenis>
    // Smooth Scrolling (Don't Touch)
  );
};

export default App;
