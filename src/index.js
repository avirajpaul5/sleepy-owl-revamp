import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductPage from "./Pages/ProductPage";
import PageNotFound from "./Pages/PageNotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route exact path="/product-page" element={<ProductPage />} /> */}
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </>
);
