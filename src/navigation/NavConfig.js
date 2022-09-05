import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
