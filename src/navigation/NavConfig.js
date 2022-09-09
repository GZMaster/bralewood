import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/Main";
import MoreAbout from "../pages/moreabout/MoreAbout";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<MoreAbout />} />
        <Route path="/*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
